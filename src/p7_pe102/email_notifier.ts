import { Order } from "./data_types";
import { Observer } from "./observer";

/**
 * EmailNotifier - concrete observer for the emails
 */
export class EmailNotifier implements Observer {
  update(order: Order): void {
		console.log(`Sending email. The order with id ${order.id} is now ${order.status}`);
	}
}