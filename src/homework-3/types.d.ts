export interface Node {
  next: Node | null
  prev: Node | null
  value: unknown
}

export type LinkedNode = Node | null
