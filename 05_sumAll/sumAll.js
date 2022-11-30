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

//  SOLUTION  //

/*

const sumAll = function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};

module.exports = sumAll;

*/


// Do not edit below this line
module.exports = sumAll;
