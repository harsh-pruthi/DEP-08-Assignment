var isPalindrome = function(s) {
    let str = s.split('').filter(char => (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')).join('');
   console.log(str); 
   let x = str.toLowerCase();
   return x === x.split('').reverse().join('');

};

