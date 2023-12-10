/*This is function that accepts two parameters. The first parameter
is a word while the second parameter is a letter. The function
when called searches for the letter in the word and matches it
with the array number where it was found.*/
function match(word, letter) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] == letter) {
            console.log('letter', letter, 'found at array number', i, 'of', word)
        } else {
            console.log('No match found at', i)
        }
    }
}
match("pipe", "p")
match('sand', 'a')

