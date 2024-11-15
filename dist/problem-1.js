"use strict";
{
    function sumArray(numbers) {
        return numbers.reduce((acc, cur, i) => {
            return cur + acc;
        }, 0);
    }
    console.log(sumArray([5, 9, 8]));
}
