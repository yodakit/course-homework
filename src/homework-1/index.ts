const createBitGetter = (array: Uint8Array) => {

  const indexValidation = (elemIndex: number, bitIndex: number) => {
    if (elemIndex < 0 || elemIndex >= array.length) {
      throw new Error('Incorrect element index')
    }

    if (bitIndex < 0b0 || bitIndex > 0b111) {
      throw new Error('Incorrect bit index')
    }
  }


  return {
    get(elemIndex: number, bitIndex: number): number {
      indexValidation(elemIndex, bitIndex)

      return array[elemIndex] & 0b1 << bitIndex ? 1 : 0
    }
  }
}

const bitGetter = createBitGetter(new Uint8Array([0b1110, 0b1101]))

console.log(bitGetter.get(0, 1))
console.log(bitGetter.get(1, 1))
