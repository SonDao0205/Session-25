let check = (array) =>{
    let result = []
    for (const number of array) {
        if (!Number.isFinite(number)) {
            return `Mang khong hop le`
        }
        if (number % 2 == 0) {
            result.push(number)
        }
    }
    return result.length > 0 ? result : `Mang khong chua so chan`
}
let array = [11,2,65,8]
console.log(check(array));

