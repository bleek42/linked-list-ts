import { randomUUID } from 'crypto';
import { type INode, type V } from '../interfaces';


export class Node implements INode<V> {
	public id = randomUUID();
	public value: V;
	public next = null;
	public prev = null;

	constructor(value: V) {
		this.value = value;
	}


	public get currentValue(): V {
		return this.value;
	}


	public set newValue(value: V) {
		this.value = value;
	}



}
