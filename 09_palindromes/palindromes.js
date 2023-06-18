const palindromes = function (string) {
    let punctuation = string.split('!')
    if (punctuation) string = punctuation.join('').toLowerCase()
    

    punctuation = string.split(', ')
    if (punctuation) string = punctuation.join('')

    punctuation = string.split('.')
    if (punctuation) string = punctuation.join('')

    punctuation = string.split(' ')
    if (punctuation) string = punctuation.join('')

    let reversed
    for(let i = string.length - 1;i >= 0; i--){

        if (!(reversed))reversed = string[i]
        else reversed += string[i]
    }
    if (string === reversed) return true
    return false
};

// Do not edit below this line
module.exports = palindromes;
