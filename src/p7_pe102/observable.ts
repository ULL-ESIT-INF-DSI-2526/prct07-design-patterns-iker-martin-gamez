import { Order } from "./data_types";
import { Observer } from "./observer";

/**
 * Interface Observable
 */
export interface Observable {
  suscribe(observer: Observer): void;
	unsuscribe(observer: Observer): void;
	notify(order: Order): void;
}