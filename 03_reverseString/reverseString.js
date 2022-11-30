
const reverseString = function(str="hello") {
    if (str === '') return '';
    strarr = []
    for(i=0; i<str.length; i++){
        strarr[i] = str.charAt(str.length-1-i);
    }
    str = strarr.toString();
    str = str.replace(/,/g, '');
    return str;
};

//  SOLUTION  //

/* 

const reverseString = function(string) {
 return string.split('').reverse().join('');
}; 

*/

// Do not edit below this line
module.exports = reverseString;
