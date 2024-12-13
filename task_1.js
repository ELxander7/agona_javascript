function task_1 (number){
    if(number < 0){
        return false;
    }
    const numberStr = number.toString();
    let reversedStr = '';
    numberStr.split('').forEach(char => {reversedStr = char + reversedStr});

    return numberStr === reversedStr;
}
console.log(task_1(121));
console.log(task_1(-121));
console.log(task_1(10));
console.log(task_1(0));