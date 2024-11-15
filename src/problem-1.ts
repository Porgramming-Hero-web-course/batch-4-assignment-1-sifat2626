{
  function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, cur, i) => {
      return cur + acc
    }, 0)
  }

  console.log(sumArray([5, 9, 8]))
}
