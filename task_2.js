function sumOfElems(nums, target){
    let result = []
    nums.forEach((num, i) => {
        const j = nums.findIndex((n, index) => index > i && num + n === target);
        if (j !== -1) {
            result = [i, j];
        }
    });
    return result;
};

console.log(sumOfElems([2, 7, 11, 15 ], 9))
console.log(sumOfElems([3,2,4], 6))
console.log(sumOfElems([3,3], 6))
