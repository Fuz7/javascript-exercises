const removeFromArray = function(array,...items) {
    for (i = 0;i < items.length; i++){
        let item = items[i]
        for (j = 0; j < array.length; j++){
            let arrayItem = array[j]
            if (arrayItem === item){
                array.splice(j, 1)
                break
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
