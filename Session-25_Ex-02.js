const sum = (firstNumber, secondNumber) =>{
    let sum = firstNumber + secondNumber
    return !Number.isInteger(firstNumber) || !Number.isInteger(secondNumber) ? `Du lieu khong hop le` : (`Tong 2 so : ${sum}`)
}
let num_1 = +prompt("Nhap so nguyen thu nhat")
let num_2 = +prompt("Nhap so nguyen thu hai")
console.log(sum(num_1,num_2));
