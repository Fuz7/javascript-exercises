const findTheOldest = function(arr) {
    arr.sort((a,b) => 
    {   date = new Date()
        if (!(a.yearOfDeath)){
        a.yearofDeath = date.getFullYear()
    } else if(!(b.yearOfDeath)){
        b.yearOfDeath = date.getFullYear()
    }
        if ((a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth)) return 1
        return -1
    })
    return arr[0]
};

// Do not edit below this line
module.exports = findTheOldest;
