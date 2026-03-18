import { describe, test, expect, vi, afterEach } from 'vitest';
import { EmailNotifier } from '../../src/p7_pe102/email_notifier';
import { Order } from '../../src/p7_pe102/data_types';

describe('EmailNotifier', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('EmailNotifier must show id and status of an order in console', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    const notifier = new EmailNotifier();
    const order: Order = { id: '7', status: 'shipped', items: ['Ratón'] };
    notifier.update(order);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('7'));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('shipped'));
  });
});