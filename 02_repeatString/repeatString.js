const repeatString = function(string, num) {
    if (num < 0){
        return "ERROR"
    }
    let repeatedString = ""
    for (let i = 0;i < num; i++){
        if (repeatedString === ""){
            repeatedString = string
        } else {
            repeatedString += string
        }
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
