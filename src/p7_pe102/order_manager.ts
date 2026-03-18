import { Order, OrderStatus } from "./data_types";
import { Observer } from "./observer";
import { Observable } from "./observable";

/**
 * New class OrderManager to control the orders
 */
export class OrderManager implements Observable {
  private observers: Observer[] = [];
	private orders: Order[] = [];
	/**
	 * Method suscribe from Observable
	 * @param observer - observer that is going to suscribe
	 */
	suscribe(observer: Observer): void {
		if (this.observers.includes(observer)) {
			throw new Error("This observer is already suscribed");
		} else {
			this.observers.push(observer);
		}
	}
	/**
	 * Method unsuscribe from Observable
	 * @param observer - observer that is going to unsuscribe
	 */
	unsuscribe(observer: Observer): void {
		const index = this.observers.indexOf(observer);
		if (index === -1) {
			throw new Error("The observer has not been suscribed");
		} else {
			this.observers.splice(index, 1);
		}
	}
	/**
	 * Method notify from Observable
	 * @param order - new order
	 */
	notify(order: Order): void {
		this.observers.forEach((observer) => observer.update(order));
	}
	/**
	 * addOrder - method to add new orders to the array
	 * @param order - order to add
	 */
	addOrder(order: Order): void {
		if (this.orders.some((existingOrder) => existingOrder.id === order.id)) {
			throw new Error(`El pedido con id ${order.id} ya existe`);
		} else {
			this.orders.push(order);
		}
	}
	/**
	 * getOrder - method that returns the order corresponded to the id
	 * @param id - id of the order we will return
	 * @returns order with that id or undefined
	 */
	getOrder(id: string): Order | undefined {
		return this.orders.find((order) => order.id === id);
	}
	/**
	 * changeOrderStatus - method that change order status
	 * @param id - id of the order that we want to change the status
	 * @param newStatus - new status of the order
	 */
	changeOrderStatus(id: string, newStatus: OrderStatus): void {
		const order = this.getOrder(id);
		if (order) {
			if (order.status !== newStatus) {
				order.status = newStatus;
				this.notify(order);
			}
		}
	}
}