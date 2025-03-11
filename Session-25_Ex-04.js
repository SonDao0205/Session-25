let check = (number) => {
    if (!Number.isInteger(number)) {
        return `Du lieu khong hop le`
    }
    if (number < 2) {
        return `${number} khong phai so nguyen to`
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return `${number} khong phai so nguyen to`
        }
    }
    return `${number} la so nguyen to`
}

let num = +prompt("Nhap so nguyen bat ki")
console.log(check(num));
