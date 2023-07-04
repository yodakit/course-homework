// LinkedList
export interface Node {
  next: Node | null
  prev: Node | null
  value: unknown
}

export type LinkedNode = Node | null

// Structure
export type Encoding = 'utf16' | 'u16'

export type StructureItem = [string, Encoding, number?]