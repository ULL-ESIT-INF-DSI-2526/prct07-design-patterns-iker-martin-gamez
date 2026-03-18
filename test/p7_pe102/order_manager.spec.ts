import { describe, test, expect, beforeEach, vi } from 'vitest';
import { OrderManager } from '../../src/p7_pe102/order_manager';
import { Order } from '../../src/p7_pe102/data_types';
import { EmailNotifier } from '../../src/p7_pe102/email_notifier';
import { InventoryUpdater } from '../../src/p7_pe102/inventory_update';

describe('Class OrderManager', () => {
  let store: OrderManager;
  let emailNotifier: EmailNotifier;
  let inventoryUpdater: InventoryUpdater;

  beforeEach(() => {
    store = new OrderManager();
    emailNotifier = new EmailNotifier();
    inventoryUpdater = new InventoryUpdater();
  });

  test('suscribe method', () => {
    store.suscribe(emailNotifier);
    expect(() => {
      store.suscribe(emailNotifier);
    }).toThrowError('This observer is already suscribed');
  });

	test('unsuscribe method', () => {
    store.suscribe(emailNotifier);
		store.unsuscribe(emailNotifier);
    expect(() => {
      store.unsuscribe(emailNotifier);
    }).toThrowError('The observer has not been suscribed');
  });

  test('addOrder and getOrder methods', () => {
    const order: Order = { id: '1', status: 'pending', items: ['Monitor'] };
    store.addOrder(order);
    expect(store.getOrder('1')).toEqual(order);
    expect(store.getOrder('999')).toBeUndefined();
  });

  test('check an existing order and throw an error', () => {
    const order: Order = { id: '1', status: 'pending', items: ['Monitor'] };
    store.addOrder(order);
    expect(() => {
      store.addOrder({ id: '1', status: 'confirmed', items: ['Cable'] });
    }).toThrowError('El pedido con id 1 ya existe');
  });

  test('notify suscribers when the status of an order changes', () => {
    const order: Order = { id: '1', status: 'pending', items: ['Monitor'] };
    store.addOrder(order);
    store.suscribe(emailNotifier);
    store.suscribe(inventoryUpdater);
    const emailSpy = vi.spyOn(emailNotifier, 'update');
    const inventorySpy = vi.spyOn(inventoryUpdater, 'update');
    store.changeOrderStatus('1', 'confirmed');
    expect(emailSpy).toHaveBeenCalledTimes(1);
    expect(emailSpy).toHaveBeenCalledWith(expect.objectContaining({ status: 'confirmed' }));
    expect(inventorySpy).toHaveBeenCalledTimes(1);
  });

  test('not notify if the new status of the order is exactly the same', () => {
    const order: Order = { id: '1', status: 'pending', items: ['Monitor'] };
    store.addOrder(order);
    store.suscribe(emailNotifier);
    const emailSpy = vi.spyOn(emailNotifier, 'update');
    store.changeOrderStatus('1', 'pending');
    expect(emailSpy).not.toHaveBeenCalled();
  });

  test('unsuscribe method, not notify if the observer is unsuscribed', () => {
    const order: Order = { id: '1', status: 'pending', items: ['Monitor'] };
    store.addOrder(order);
    store.suscribe(emailNotifier);
    const emailSpy = vi.spyOn(emailNotifier, 'update');
    store.unsuscribe(emailNotifier);
    store.changeOrderStatus('1', 'shipped');
    expect(emailSpy).not.toHaveBeenCalled();
  });
});
