let check = (array) =>{
    let count = 0
    for (const number of array) {
        if (Number.isInteger(number) && number > 0) {
            count++
        }
    }
    return count > 0 ? count : `khong co so nguyen duong trong mang`
}

let array = [2,5.4,3,6,-2]
console.log(check(array));
