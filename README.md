# Javascript Coding Challenges

This is a collection of coding challenges using vanilla javascript.

1. [English to Pig Latin Translator](./pig_latin_translator)

        Given a word, move all consonants to the end till the first vowel and end the word with "ay".
        Example:
            Input: Shrimp   ->  Output: Impshray
            Input: translation  =>  Output: anslationtray


2. [Check Array Symmetry](./array_symmetrical_check)

        Find if a matrix is symmetrical horizontally, vertically or both.
        Example:
            Input: [
                    ["a", "a", "a", "a"],
                    ["a", "a", "a", "a"],   ->  Output: Not Symmetrical
                    ["a", "a", "b", "b"]
                    ] 
            Input: [
                    ["c", "a", "a", "a"],
                    ["b", "b", "b", "b"],   -> Output: Horizontally Symmetrical
                    ["c", "a", "a", "a"]
                    ]
            Input: [
                    ["a", "b", "a"],
                    ["b", "b", "b"],
                    ["a", "b", "a"],    -> Output: Vertically Symmetrical
                    ["a", "b", "a"]
                    ]
            Input: [
                    ["a", "b", "b", "a"],
                    ["b", "b", "b", "b"],   -> Output: Fully Symmetrical
                    ["a", "b", "b", "a"]
                    ]
