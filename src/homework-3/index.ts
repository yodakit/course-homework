import LinkedList from './linkedList'

const prependedList = new LinkedList()
const appendedList = new LinkedList()

prependedList.prepend(1)
prependedList.prepend(2)
prependedList.prepend(3)

console.log(prependedList.first?.value);           // 1
console.log(prependedList.last?.value);            // 3
console.log(prependedList.first?.next?.value);      // 2
console.log(prependedList.first?.next?.prev?.value); // 1

console.log('---')

appendedList.append(1)
appendedList.append(2)
appendedList.append(3)


console.log(appendedList.first?.value);           // 3
console.log(appendedList.last?.value);            // 1
console.log(appendedList.first?.next?.value);      // 2
console.log(appendedList.first?.next?.prev?.value); // 3

console.log('---')

const list = new LinkedList()

list.prepend(1);
list.prepend(2);
list.prepend(3);

for (const value of list) {
  console.log(value);
}