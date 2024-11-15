"use strict";
// SOLUTION 1
// {
//   function removeDuplicates(numbers: number[]): number[] {
//     return [...new Set(numbers)]
//   }
//   console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 7]))
// }
// SOLUTION 2
{
    function removeDuplicates(numbers) {
        return numbers.filter((num, index) => numbers.indexOf(num) === index);
    }
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 7]));
}
