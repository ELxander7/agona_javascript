function removeDuplicates(nums) {
    let uniqueIndex = 0;

    nums.forEach((num) => {
        if (num !== nums[uniqueIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = num;
        }
    });

    return uniqueIndex + 1;
}


const nums1 = [1,1,2]
let k1 = removeDuplicates(nums1);
console.log(k1, nums1.slice(0, k1));


const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
let k2 = removeDuplicates(nums2);
console.log(k2, nums2.slice(0, k2));
