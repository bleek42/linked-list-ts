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

	public search(comparator: (value: T) => boolean): Node<T> | null {
		const getNextNode = (node: Node<T>): Node<T> | null => {
			if (comparator(node.value)) {
				return node;
			}
			return node.next ? getNextNode(node.next) : null;
		};
		return this.head ? getNextNode(this.head) : null;
	}
}

interface INodeValue {
	id: number;
	name: string;
	dob: Date;
	password: string;
	email: string;
	isAdmin: boolean;
}

class NodeValue<T> implements INodeValue {
	public readonly id: number;
	public readonly name: string;
	public readonly dob: Date;
	public password: string;
	public email: string;
	public isAdmin: boolean;

	public constructor(
		id: number,
		name: string,
		dob: Date,
		password: string,
		email: string,
		isAdmin: boolean,
	) {
		this.id = id;
		this.name = name;
		this.dob = dob;
		this.password = password;
		this.email = email;
		this.isAdmin = isAdmin;
	}
}

const linkedList = new LinkedList<INodeValue>();

const userBrandon = new NodeValue(
	42,
	"Brandon Leek",
	new Date("1992-03-31"),
	"passwerd123",
	"brandon.leek@somestartup.com",
	true,
);

linkedList.insertFirst(userBrandon);

console.log(linkedList.traverse());
