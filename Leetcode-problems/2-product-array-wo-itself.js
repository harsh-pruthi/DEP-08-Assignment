//Approach 1 
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let ans = new Array(n).fill(1);
    for(let i=0; i<nums.length; i++){
        //let product = 1;
        for(let j=0; j<nums.length; j++){
            if(j!=i){
                ans[i] *= nums[j];
            }
        }
        //ans.push(product);
    }
    console.log(ans);
    return ans;
};

//Approach 2
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let ans = new Array(n).fill(1);
   
    let prefix = new Array(n).fill(1);
    let suffix = new Array(n).fill(1);

    for(let i=1; i<n; i++){
        console.log(prefix[n-1]);
        console.log(nums[i-1]);
        prefix[i] = prefix[i-1]*nums[i-1];
    }
    console.log(prefix);

    for(let i=n-2; i>=0; i--){
        suffix[i] = suffix[i+1]*nums[i+1];
    }
    console.log(suffix);


    for(let i=0; i<n; i++){
        ans[i] = prefix[i]*suffix[i];
    }
   
   
    console.log(ans);
    return ans;
};

//Approach 3
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let ans = new Array(n).fill(1);

    for(let i=1; i<n; i++){
        ans[i] = ans[i-1]*nums[i-1];
    }
    
    let suffix = 1;

    for(let i=n-2; i>=0; i--){
        suffix = suffix*nums[i+1];
        ans[i] = ans[i]*suffix;
    }
    console.log(suffix);


    console.log(ans);
    return ans;
};