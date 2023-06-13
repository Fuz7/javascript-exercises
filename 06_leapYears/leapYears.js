const leapYears = function(years) {
    if (years % 4 === 0){
        if (years % 100 === 0 && years % 400 === 0) {
            return true;
        } else if (years % 100 === 0){
            return false;
        } else{
            return true;
        }
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
