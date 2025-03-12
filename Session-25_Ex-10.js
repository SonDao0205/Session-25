let products= [ ["mì tôm", 5, 5000], ["bánh mì", 12, 15000], ["bánh bao", 5, 8000], ["mèn mén", 30, 20000]]
let carts=[]
let choice 

do {
    choice = +prompt(`
        1. Xem danh sach san pham
        2. Chon san pham
        3. Tinh tong tien va hoa don
        4. Thoat`)
    switch (choice) {
        case 1:
            displayMenu(products)
            break;
        case 2:
            let searchName = prompt(`Nhap ten san pham ban muon tim`)
            chooseProduct(searchName,products,carts)
            break;
        case 3:
            total(carts)
            break;
        case 4:
            console.log(`Tam biet!`);
            break;
        default:
            console.log(`Lua chon khong phu hop`);
            break;
    }
} while (choice != 4);


function displayMenu(products) {
    console.log(`Danh sach san pham hien co`);
    for (let i = 0; i < products.length; i++) {
        console.log(`${i+1}. `,products[i][0],` - So luong: `,products[i][1],` - Gia: `,products[i][2]);
    }
}

function chooseProduct(searchName,products,carts) {
    searchName = searchName.toLowerCase()
    let flag = 0
    for (let i = 0; i < products.length; i++) {
        if (searchName === products[i][0]) {
            flag = 1
            let quantity = +prompt(`Nhap so luong muon mua:`);
            if (quantity > 0 && quantity <= products[i][1]) {
                products[i][1] -= quantity;
                addToCart(searchName, quantity, products[i][2], carts);
                console.log(`Da them ${searchName} vao gio hang thanh cong`);
            } else {
                console.log(`So luong khong phu hop`);
            }
        }
    }
    if (flag === 0) {
        return `Khong tim thay san pham trong cua hang`
    }
}

function addToCart(name, quantity, price, carts) {
    let flag = 0;
    for (let i = 0; i < carts.length; i++) {
        if (carts[i][0] === name) {
            carts[i][1] += quantity;
            flag = 1;
            break;
        }
    }
    if (flag === 0) {
        carts.push([name, quantity, price]);
    }
}

function total(carts) {
    if (carts.length === 0) {
        console.log(`Chua co san pham nao trong gio hang`);
        return;
    }
    let total = 0;
    console.log(`Hoa don`);
    for (let i = 0; i < carts.length; i++) {
        let itemTotal = carts[i][1] * carts[i][2];
        console.log(`${carts[i][0]} - So luong: ${carts[i][1]} - Gia: ${carts[i][2].toLocaleString('vi', {style : 'currency', currency : 'VND'})} - Tong: ${itemTotal.toLocaleString('vi', {style : 'currency', currency : 'VND'})}`);
        total += itemTotal;
    }
    console.log(`Tong tien: ${total.toLocaleString('vi', {style : 'currency', currency : 'VND'})}`);
}
