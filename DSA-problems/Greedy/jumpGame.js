var canJump = function(nums) {
    let flag = true;
    let maxIndex = 0;
    for(let i=0; i<nums.length; i++){
        if(i>maxIndex){
            flag = false;
        }else{
            maxIndex = Math.max(maxIndex, i+nums[i]);
            console.log(maxIndex);
        }
    }
    return flag;
};

console.log(canJump([2,3,1,1,4]));
