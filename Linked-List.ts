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
}
