let array = [2,4,6,8,3]
function minNumber(array) {
    if (array.length == 0) {
        console.log(`Mang khong chua phan tu`);
    }
    else{
        if (Math.min(...array) === NaN) {
            console.log(`Gia tri khong hop le`);
        }
        else{
            console.log(`Phan tu nho nhat trong mang la : ${Math.min(...array)}`);   
        }
    }
}
console.log(minNumber(array));

