import { describe, test, expect, vi, afterEach } from 'vitest';
import { InventoryUpdater } from '../../src/p7_pe102/inventory_update';
import { Order } from '../../src/p7_pe102/data_types';

describe('InventoryUpdater', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('InventoryUpdater must show id and status of an order in console', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    const notifier = new InventoryUpdater();
    const order: Order = { id: '7', status: 'shipped', items: ['Ratón'] };
    notifier.update(order);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('7'));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('shipped'));
  });
});