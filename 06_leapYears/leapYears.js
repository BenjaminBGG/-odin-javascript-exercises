const leapYears = function(year) {
    if(isNaN(year)){
        return 'ERROR'
    } else if (year % 400 === 0 || (year % 4 === 0 && !(year % 100 === 0))) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
