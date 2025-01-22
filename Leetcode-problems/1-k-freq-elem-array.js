/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    //map to store frequencies 

    //iterate over the nums array, add frequency to map
    for(let i = 0; i<nums.length; i++){
        if(!map.has(nums[i])){
            map.set(nums[i], 1);
        }
        else{
            map.set(nums[i], map.get(nums[i])+1);
        }
    }

    console.log(map);

    //sort the map according to the values
    const mapSort1 = new Map([...map.entries()].sort((a,b)=>b[1]-a[1]));
    console.log(mapSort1);

    //store the result 
    let result = [];
    let count = 0;

    for(let[key, val] of mapSort1.entries()){
        //store the top k elements in the result array
        if(count<k){
            result.push(key);
            count++;
        }
    }
    return result;
};