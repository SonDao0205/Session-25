function isStrongPassword(string) {
    if (string.length < 8){ 
        return false
    };
    let upperCase = false;
    let lowerCase = false;
    let number = false;

    for (const char of string) {
        if (char >= 'A' && char <= 'Z'){
            upperCase = true;
        }
        else if (char >= 'a' && char <= 'z'){
            lowerCase = true;
        }
        else if (char >= '0' && char <= '9'){
            number = true;
        }
        if (upperCase && lowerCase && number){
            return true;
        }
    }
    return false;
}

console.log(isStrongPassword("Abc123!@"));
console.log(isStrongPassword("weakpass"));
