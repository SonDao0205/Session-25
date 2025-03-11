const isPalindrome = (string) => {
    let array = []
    array = string.split("")
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[array.length - 1 -  i]) {
            return `${string} khong phai chuoi doi xung`
        }
    }
    return `${string} la chuoi doi xung`
}

let string = prompt("Nhap chuoi")
console.log(isPalindrome(string));