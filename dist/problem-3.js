"use strict";
{
    function countWordOccurrences(sentence, word) {
        const lowerCaseSentence = sentence.toLowerCase();
        const lowerCaseWord = word.toLowerCase();
        const words = lowerCaseSentence.split(" ");
        return words.filter((word) => word === lowerCaseWord).length;
    }
    console.log(countWordOccurrences("I love typescript", "typescript"));
}
