import { Reproducible } from './reproducible';
import { Song } from './song';
import { PodcastData, Podcast } from './podcast';

/**
 * Generic class History that will contains songs and podcasts
 */
export class History<T extends Reproducible<unknown>> {
  private _items: T[];
	// Constructor
	constructor(items: T[] = []) {
		this._items = [...items];
	}
	/**
	 * Add an element to the items
	 * @param item - item to add
	 */
	add(item: T): void {
		this._items.push(item);
	}
	/**
	 * Remove an element from the items
	 * @param index - index from the item that we will remove
	 */
	remove(index: number): void {
		if (index >= 0 && index < this._items.length) {
			this._items.splice(index, 1);
		}
	}
	/**
	 * Get an item by index
	 * @param index - index of the item to return
	 * @returns item of index x
	 */
	get(index: number): T {
		return this._items[index];
	}
	/**
	 * Size of history
	 * @returns number of items
	 */
	size(): number {
		return this._items.length;
	}
	/**
	 * Duration of the whole history
	 * @returns number of seconds of the whole hisroty
	 */
	duration(): number {
		let sum = 0;
		for (let i = 0; i < this._items.length; i++) {
			sum += this._items[i].duration();
		}
		return sum;
	}
}