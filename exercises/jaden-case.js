'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(sentence){
	let words=sentence.split(' ');
 	for (let i=0; i<words.length; i++){
 		let eachWord=words[i].toLowerCase().split();
 		for (let j=0; j<eachWord.length; j++){
 		let eachLetter=eachWord[j].split('');
 		eachLetter[0]=eachLetter[0].toUpperCase(0);
 		eachWord[j]=eachLetter.join('');
 		words[i]=eachWord[j];
 		}
 	}
 	sentence=words.join(' ');
	return sentence.trimRight();
} 	
console.log(jadenCase('You must write your own tests'));

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase('You must write your own tests'),'You Must Write Your Own Tests')
//assert.fail('You must write your own tests')
// End of tests */
