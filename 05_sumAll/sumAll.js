const sumAll = function(i1, i2) {
    let num = 0;
    if ( !(typeof(i1) === 'number' && typeof(i2) === 'number') || (i1 < 0 || i2 < 0) ) {
        return 'ERROR';
    } else if (i1 <= i2) {
        while (i1 <= i2) {
            num += i1;
            i1++;
        }
    } else {
        while (i1 >= i2) {
            num += i2;
            i2++;
        }
    }
    return num;
};
//sumAll(1, 9)
// Do not edit below this line
module.exports = sumAll;
