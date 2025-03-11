const carts = []

/**
 * Hàm thêm giá vào giỏ hàng
 * @param {*} price Giá lấy từ người dùng
 * @returns Giỏ hàng sau khi thêm
 */

const addPrice = (price) => {
    // Thêm giá vào cuối mảng
    carts.push(price)
    // Trả về mảng sau khi thêm
    return carts
}

const updatePrice = () => {
    return carts
}

const removePrice = () => {
    return carts
}

const totalAmount = () => {

}

const resultAdd1 = addPrice(100000)

console.log(resultAdd1);


