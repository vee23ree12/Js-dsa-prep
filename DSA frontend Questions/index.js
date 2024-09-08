const isPalindrome = function(x){
    return x === +x.toString().split("").reverse().join("");
}

isPalindrome(121);
console.log(isPalindrome);//print function object
console.log(isPalindrome(121)); //print true