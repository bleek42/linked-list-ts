import { Node } from "./node";

export interface ILinkedList<T> {
	insertFirst(value: T): Node<T>;
	insertLast(value: T): Node<T>;
	remove(node: Node<T>): void;
	traverse(): T[];
	size(): number;
	search(query: (data: T) => boolean): Node<T> | null;
}
