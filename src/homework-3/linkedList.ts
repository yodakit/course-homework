import LinkedListNode from './linkedListNode'

export default class LinkedList {
  first = null
  last = null
  
  add(value: number) {
    const node = new LinkedListNode(value)
    
    if (!this.first) {
      this.first = node
      this.last = node
      return;
    }
    
    node.prev = this.last
    
    
  }
}