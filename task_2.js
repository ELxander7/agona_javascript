function sumOfElems(nums, target){
    let result = []
    nums.forEach((num, i) => {
        nums.forEach((n, j) => {
            if (i < j && num + n === target) {
                result = [i, j];
            }
        })
    });
    return result;
};

console.log(sumOfElems([2, 7, 11, 15 ], 9))
console.log(sumOfElems([3,2,4], 6))
console.log(sumOfElems([3,3], 6))
console.log(sumOfElems([1, 4, 8, 3, 2], 7))
