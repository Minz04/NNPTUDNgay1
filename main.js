// Câu 1: Khai báo Constructor Function 
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products  
// Tạo từng sản phẩm rõ ràng
const products = [
    new Product(1, "Laptop Dell XPS", 35000000, 10, "Laptop", true),
    new Product(2, "iPhone 15 Pro", 28000000, 5, "Phone", true),
    new Product(3, "Chuột Logitech", 500000, 0, "Accessories", false),
    new Product(4, "Bàn phím cơ", 1500000, 20, "Accessories", true),
    new Product(5, "Tai nghe Sony", 2500000, 15, "Accessories", true),
    new Product(6, "MacBook Air", 24000000, 8, "Laptop", true)
];

// Hiển thị kết quả ra HTML
// JSON.stringify giúp biến mảng thành chuỗi để in ra màn hình
document.getElementById('kq2').innerHTML = JSON.stringify(products, null, 4);


// Câu 3: Tạo mảng mới chỉ chứa name và price  
const listNameAndPrice = products.map((product) => {
    // Tạo một object mới chỉ lấy 2 thông tin cần thiết
    const newObject = {
        name: product.name,
        price: product.price
    };
    return newObject; // Trả về object này
});

document.getElementById('kq3').innerHTML = JSON.stringify(listNameAndPrice, null, 4);


// Câu 4: Lọc ra các sản phẩm còn hàng (quantity > 0)  
// Dùng .filter()
const listConHang = products.filter((product) => {
    // Điều kiện: số lượng lớn hơn 0
    if (product.quantity > 0) {
        return true; // Giữ lại
    } else {
        return false; // Loại bỏ
    }
});

document.getElementById('kq4').innerHTML = JSON.stringify(listConHang, null, 4);


// Câu 5: Kiểm tra có sản phẩm giá trên 30.000.000  
// Dùng .some() - trả về true nếu tìm thấy ít nhất 1 cái
const checkGiaCao = products.some((product) => {
    return product.price > 30000000;
});

if (checkGiaCao == true) {
    document.getElementById('kq5').innerHTML = "Có sản phẩm giá trên 30 triệu";
} else {
    document.getElementById('kq5').innerHTML = "Không có sản phẩm nào";
}


// Câu 6: Kiểm tra tất cả danh mục "Accessories" có đang bán không 
// Bước 1: Lọc ra danh sách phụ kiện trước
const listPhuKien = products.filter((product) => {
    return product.category === 'Accessories';
});

// Bước 2: Kiểm tra tất cả danh sách đó (dùng .every())
const checkPhuKien = listPhuKien.every((product) => {
    return product.isAvailable === true;
});

// Bước 3: In kết quả
if (checkPhuKien == true) {
    document.getElementById('kq6').innerHTML = "Đúng, tất cả phụ kiện đều đang mở bán";
} else {
    document.getElementById('kq6').innerHTML = "Sai, có phụ kiện đang ngừng bán";
}


// Câu 7: Tính tổng giá trị kho hàng  
let tongTien = 0; // Biến chứa tổng

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    // Công thức: Giá * Số lượng
    const giaTriSanPham = product.price * product.quantity;
    // Cộng dồn vào tổng
    tongTien = tongTien + giaTriSanPham;
}

// Định dạng tiền tệ cho đẹp (VNĐ)
const tienVietNam = tongTien.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
document.getElementById('kq7').innerHTML = "Tổng giá trị kho: " + tienVietNam;


// Câu 8: Dùng for...of duyệt mảng  
let noiDungCau8 = ""; // Biến chứa chuỗi HTML

for (const product of products) {
    // Kiểm tra trạng thái để in ra chữ tiếng Việt
    let trangThai = "";
    if (product.isAvailable == true) {
        trangThai = "Đang bán";
    } else {
        trangThai = "Ngừng bán";
    }

    // Cộng chuỗi vào biến noiDungCau8 (dùng thẻ <p> cho mỗi dòng)
    noiDungCau8 += `<p>${product.name} - ${product.category} - ${trangThai}</p>`;
}

document.getElementById('kq8').innerHTML = noiDungCau8;


// Câu 9: Dùng for...in để in thuộc tính  
const sanPhamMau = products[0]; // Lấy sản phẩm đầu tiên làm mẫu
let noiDungCau9 = "";

for (const key in sanPhamMau) {
    // key là tên thuộc tính 
    // sanPhamMau[key] là giá trị (ví dụ: 1, Laptop Dell...)
    noiDungCau9 += `<p><strong>${key}:</strong> ${sanPhamMau[key]}</p>`;
}

document.getElementById('kq9').innerHTML = noiDungCau9;


// Câu 10: Lấy danh sách tên SP đang bán và còn hàng 
// Bước 1: Lọc sản phẩm thỏa mãn 2 điều kiện
const listThoaMan = products.filter((product) => {
    return product.isAvailable === true && product.quantity > 0;
});

// Bước 2: Chỉ lấy ra tên của các sản phẩm đó
const listTenSanPham = listThoaMan.map((product) => {
    return product.name;
});

document.getElementById('kq10').innerHTML = JSON.stringify(listTenSanPham, null, 4);