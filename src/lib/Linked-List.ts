import { Node } from "./Node";
import { type IDoubleLinkedList, type INode, type NodeValue } from "../interfaces";
import { UUID } from "crypto";

export default class DoubleLinkedList implements IDoubleLinkedList {
	head?: INode<NodeValue | null> | null;
	tail?: INode<NodeValue | null> | null;
	items: Array<INode>;
	size: number;

	constructor() {
		this.items = [];
		this.size = 0;
	}

	// get headNode(): INode<NodeValue> | null {
	// 	return this.head;
	// }

	// set newHeadNode(NodeValueal: NodeValue) {
	// 	this.head = new Node(NodeValueal);
	// }

	// get tailNode() : INode<NodeValue> | null {
	// 	return this.tail; 
	// }


	// set newTailNode(NodeValueal: NodeValue) {
	// 	this.tail = new Node<NodeValue>(NodeValueal);
	// }	

	public insertAtHead(node: INode<NodeValue>): { prevHead?: INode<NodeValue> | null, newHead: INode<NodeValue> | null; } {

		// ? if there is no head, that means list is clear, assume setting 1st node
		const newHead = node;
		let prevHead: INode<NodeValue> | null | undefined = this.head;
		const result = { prevHead, newHead };

		if (this.head) {
			// ? set current head nodes next node property to the node we are inserting
			node.prev = this.head;
			this.head.next = node;
			// ? then set current head nodes next node property to the node we are inserting
			this.head = node;

			this.items.unshift(newHead.id);
			this.size = this.items.length;
		}
		if (!this.head) {
			this.head = node;
			this.items.unshift(newHead.id);
			this.size = this.items.length;
		}

		return result;



		// console.log(this)
	}

	public insertAtTail(node: INode<NodeValue>): { prevTail?: INode<NodeValue> | null, newTail: INode<NodeValue>; } {
		const newTail: INode<NodeValue> = node;
		let prevTail: INode<NodeValue> | null | undefined = this.tail;
		// const result = {};

		if (this.tail) {

			// const getLast = (node: Node<T>): Node<T> => {
			// 	return node.next ? getLast(node.next) : node;
			// };
			node.next = this.tail;
			this.tail.next = this.tail;
			this.tail = node;
			this.items.unshift(newTail.id);
			this.size = this.items.length;
		}

		if (!this.tail) {
			this.tail = node;
			this.items.unshift(newTail.id);
			this.size = this.items.length;
		}


		return { prevTail, newTail };


	}

	public removeNode(id: UUID): INode<NodeValue> | null {
		return null;
		// if (!node.preNodeValue) {
		// 	this.head = node.next;
		// } else {
		// 	const preNodeValueNode = node.preNodeValue;
		// 	preNodeValueNode.next = node.next;
		// }
	}

	public traverse(): void {
		// const arr: T[] = [];
		// if (!this.head) throw new Error("Error: Linked List has no NodeValuealue");

		// let currNode: Node<T> | null = this.head;
		// while (currNode) {
		// 	arr.push(currNode.NodeValuealue);
		// 	currNode = currNode.next;
		// }

		// return arr;
	}

	public listSize(): number {
		return this.size;
	}

	public search(id: UUID): void {

		const result = this.items.filter((item) => id === item.id);
		console.log(result);
		// return result ?? null;
		// const getNextNode = (node: Node<T>): Node<T> | null => {
		// 	if (comparator(node.NodeValuealue)) {
		// 		return node;
		// 	}
		// 	return node.next ? getNextNode(node.next) : null;
		// };
		// return this.head ? getNextNode(this.head) : null;
	}
}

// class NodeNodeValuealue<T> implements INodeNodeValuealue {
// 	public readonly id: number;
// 	public readonly name: string;
// 	public readonly dob: Date;
// 	public password: string;
// 	public email: string;
// 	public isAdmin: boolean;

// 	public constructor(
// 		id: number,
// 		name: string,
// 		dob: Date,
// 		password: string,
// 		email: string,
// 		isAdmin: boolean,
// 	) {
// 		this.id = id;
// 		this.name = name;
// 		this.dob = dob;
// 		this.password = password;
// 		this.email = email;
// 		this.isAdmin = isAdmin;
// 	}
// }

// const linkedList = new LinkedList<INodeNodeValuealue>();

// const userBrandon = new NodeNodeValuealue(
// 	42,
// 	"Brandon Leek",
// 	new Date("1992-03-31"),
// 	"passwerd123",
// 	"brandon.leek@somestartup.com",
// 	true,
// );

// linkedList.insertFirst(userBrandon);

// console.log(linkedList.traNodeValueerse());
