import { Order } from "./data_types";
import { Observer } from "./observer";

/**
 * InventoryUpdater - concrete observer for the inventory
 */
export class InventoryUpdater implements Observer {
  update(order: Order): void {
		console.log(`Inventory is now updated for the order with id ${order.id} and status ${order.status}`);
	}
}