let longestWord = function(sentence){
	//split word into list of words
	let words = sentence.split(' ');
	console.log(words);
	
	let maxWord = "";

	for(let word of words){
		if(word.length>maxWord.length){
			maxWord = word;
		}
	}
	
	return maxWord;
}
	

console.log(longestWord("Hello my name is Harsh Pruthi"));