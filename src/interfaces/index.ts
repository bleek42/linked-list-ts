import { UUID, randomUUID } from 'crypto';

export type NodeValue = Record<string | number | symbol, any> | null;

export interface INode<V extends NodeValue = null> {
	id: UUID;
	value: V | null;
	next?: INode<NodeValue> | null;
	prev?: INode<NodeValue> | null;
}

export interface IDoubleLinkedList {
	size: number;
	items: Array<UUID | unknown>;
	head?: INode<NodeValue> | null;
	tail?: INode<NodeValue> | null;
	// getHead: INode | null;
	// getTail: INode | null;
	// setHead(node: INode<V>): void;
	// setTail(node: INode): void;
	insertAtHead(node: INode<NodeValue>): { prevHead?: INode<NodeValue> | null, newHead: INode<NodeValue> | null; } | null;
	insertAtTail(node: INode<NodeValue>): { prevTail?: INode<NodeValue> | null, newTail: INode<NodeValue> | null; } | null;
	removeNode(id: UUID): INode<NodeValue> | null;
	traverseList(): INode<NodeValue>[] | INode<NodeValue> | null;
	listSize(): number;
	searchList(id: UUID): INode<NodeValue> | void;
}
