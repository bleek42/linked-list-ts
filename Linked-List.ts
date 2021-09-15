import { Node } from "./node";
import { ILinkedList } from "./interface";

export default class LinkedList<T> implements ILinkedList<T> {
	private head: Node<T> | null = null;

	public insertFirst(value: T): Node<T> {
		const node = new Node(value);

		if (!this.head) {
			this.head = node;
		} else {
			this.head.prev = node;
			node.next = this.head;
			this.head = node;
		}

		return node;
	}

	public insertLast(value: T): Node<T> {
		const node = new Node(value);

		if (!this.head) {
			this.head = node;
		} else {
			const getLast = (node: Node<T>): Node<T> => {
				return node.next ? getLast(node.next) : node;
			};

			const lastNode = getLast(this.head);
			node.prev = lastNode;
			lastNode.next = node;
		}

		return node;
	}

	public remove(node: Node<T>): void {
		if (!node.prev) {
			this.head = node.next;
		} else {
			const prevNode = node.prev;
			prevNode.next = node.next;
		}
	}

	public traverse(): T[] {
		const arr: T[] = [];
		if (!this.head) throw new Error("Error: Linked List has no value");

		let currNode: Node<T> | null = this.head;
		while (currNode) {
			arr.push(currNode.value);
			currNode = currNode.next;
		}

		return arr;
	}

	public size(): number {
		return this.traverse().length;
	}

	public search(comparator: (value: T) => boolean): Node<T> {}
}
