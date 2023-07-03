import { LinkedNode } from './types'

class LinkedListNode {
  next: LinkedNode = null
  prev: LinkedNode = null
  value
  
  constructor(value: unknown) {
    this.value = value
  }
}

export default class LinkedList {
  first: LinkedNode = null
  last: LinkedNode = null
  
  append(value: unknown) {
    const node = new LinkedListNode(value)
    
    if (!this.first) {
      this.first = node
      this.last = node
      return;
    }
    
    node.next = this.first
    this.first.prev = node
    this.first = node
  }
  prepend(value: unknown) {
    const node = new LinkedListNode(value);

    if (!this.last) {
      this.first = node
      this.last = node
      return;
    }

    node.prev = this.last
    this.last.next = node
    this.last = node
  }
}