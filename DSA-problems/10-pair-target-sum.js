/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length-1;
    let result = [];
    while(i<j){
        let total = numbers[i]+numbers[j];
        if(total==target){
            result.push(i+1);
            result.push(j+1);
            break;
        }
        if(total<target){
            i++;
        }   
        if(total>target){
            j--;
        }   

    }
    console.log(result);
    return result;
};