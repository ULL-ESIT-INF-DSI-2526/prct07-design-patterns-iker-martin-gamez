/**
 * New datatype OrderStatus
 */
export type OrderStatus = "pending" | "confirmed" | "shipped" | "delivered";

/**
 * New datatype Order
 */
export type Order = {
  id: string,
	status: OrderStatus,
	items: string[]
}