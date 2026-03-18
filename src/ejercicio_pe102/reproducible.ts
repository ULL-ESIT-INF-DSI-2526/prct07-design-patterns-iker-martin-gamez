/**
 * Interface Reproducible that contains two properties
 */
export interface Reproducible<T> {
  data(): T;
	duration(): number;
}