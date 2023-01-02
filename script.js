console.log("*****Exercise 1 : Is_Blank*****")

//Write a program to check whether a string is blank or not
function isBlank(str) {
    if (typeof str === 'string' && str.trim().length === 0) {
        return true
    } else {
        return false
    }
}

console.log(isBlank(''))
console.log(isBlank('abc'))

console.log("*****Exercise 2 : Abbrev_name*****")

abbrev_name = function (name) {
    var split_names = name.trim().split(" ")
    if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) + ".")
    }
    return split_names[0];
}

console.log(abbrev_name("Robin Singh"));

console.log("*****Exercise 3 : SwapCase*****")

function SwapCase(str) {
    let swap = ''
    for (var i = 0; i < str.length; i++ ) {
        if (str[i] == str[i].toUpperCase()) {
            swap += str[i].toLowerCase()
        } else {
            swap += str[i].toUpperCase()
        }    
    }

    return swap;
}

console.log(SwapCase("The Quick Brown Fox"))

console.log("*****Exercise 4 : Omnipresent Value*****")

function isOmnipresent(array, valueSought) {
    for (let y = 0; y < array.length; y++) {
        if (!array[y].includes(valueSought)) {
            return false
        }
    }
    return true
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1))
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6))