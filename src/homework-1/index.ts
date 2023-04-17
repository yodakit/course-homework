const createBitAccessor = (array: Uint8Array) => {

  const indexValidation = (elemIndex: number, bitIndex: number) => {
    if (elemIndex < 0 || elemIndex >= array.length) {
      throw new Error('Incorrect element index')
    }

    if (bitIndex < 0b0 || bitIndex > 0b111) {
      throw new Error('Incorrect bit index')
    }

  }

  const getBit = (elemIndex: number, bitIndex: number): number => {
    return array[elemIndex] & 0b1 << bitIndex
  }

  const setBit = (elemIndex: number, bitIndex: number): void => {
    array[elemIndex] |= 0b1 << bitIndex  
  }

  const resetBit = (elemIndex: number, bitIndex: number): void => {
    array[elemIndex] &= ~(0b1 << bitIndex)
  }

  return {
    get(elemIndex: number, bitIndex: number): number {
      indexValidation(elemIndex, bitIndex)

      return getBit(elemIndex, bitIndex) ? 1 : 0
    },
    set(elemIndex: number, bitIndex: number, newBit: number): void {
      indexValidation(elemIndex, bitIndex)

      if (newBit === 0) {
        resetBit(elemIndex, bitIndex)
      } else {
        setBit(elemIndex, bitIndex)
      }
    }
  }
}

const bitAccessor = createBitAccessor(new Uint8Array([0b1110, 0b1101]))

console.log(bitAccessor.set(0, 1, 0))
console.log(bitAccessor.get(0, 1))
