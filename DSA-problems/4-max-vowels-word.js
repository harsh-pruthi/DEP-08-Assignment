let maxWordVowels = function(sentence){
	
    let words = sentence.split(' ');
	let answer = "";
	let maxVowelsLen = 0;


	//Helper Function
	let calcVowels = function(word){
		let vowels = "aeiouAEIOU";
		let answer = "";
		for(let i of word){
			if(vowels.includes(i)){
				answer++;
			}
		}
		return answer;
	}

	for(let word of words){
		let calcVowelsLen = calcVowels(word);
		if(calcVowelsLen>maxVowelsLen){
			maxVowelsLen = calcVowelsLen;
			answer = word;
		}
	}
	return answer;
}

console.log(maxWordVowels("Happy NEW YeAr"));