import { Order } from "./data_types";

/**
 * Interface Observer
 */
export interface Observer {
  update(order: Order): void;
}