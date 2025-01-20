function isValid(s) {

    if (s.trim().length === 0) {
        return true;
    }

    const stack = [];


    for ( let char of s ) {
        switch (char) {
            case '(':
                stack.push(')');
                break;
            case '[':
                stack.push(']');
                break;
            case '{':
                stack.push('}');
                break;
            default:
                if ( stack.length === 0 || stack.pop() !== char ) {
                    return false;
                }
        }
    }
    return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));