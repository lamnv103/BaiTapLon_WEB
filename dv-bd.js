document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Lấy giá trị từ các input
    const email = document.getElementById('email').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const postalCode = document.getElementById('postalCode').value;
    const telephone = document.getElementById('telephone').value;

    // Kiểm tra dữ liệu hợp lệ
    if (!email || !firstName || !lastName || !address || !city || !country || !postalCode || !telephone) {
        alert('Vui lòng điền đầy đủ thông tin');
        return;
    }

    // Kiểm tra định dạng email
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Địa chỉ email không hợp lệ');
        return;
    }

    alert('Thông tin thanh toán đã được gửi!');
});

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function parseNumber(numStr) {
    return parseFloat(numStr.replace(' VND', '').replace(/\./g, '').replace(/,/g, '.'));
}

function applyDiscount() {
    const discountCode = document.getElementById('discountCode').value;
    const subtotalElem = document.getElementById('subtotal');
    const vatElem = document.getElementById('vat');
    const shippingElem = document.getElementById('shipping');
    const totalElem = document.getElementById('total');

    let subtotal = parseNumber(subtotalElem.innerText);
    let vat = parseNumber(vatElem.innerText);
    let shipping = parseNumber(shippingElem.innerText);
    let total = subtotal + vat + shipping;

    // Áp dụng mã giảm giá
    if (discountCode === 'GIAMGIA10') {
        subtotal *= 0.9;
    }

    // Cập nhật lại giá trị trên giao diện
    subtotalElem.innerText = formatNumber(subtotal.toFixed(0)) + ' VND';
    total = subtotal + vat + shipping;
    totalElem.innerText = formatNumber(total.toFixed(0)) + ' VND';
}

function changeProduct(product) {
    const productImage = document.getElementById('productImage');
    const productName = document.getElementById('productName');
    const productPrice = document.getElementById('productPrice');
    const subtotalElem = document.getElementById('subtotal');
    const totalElem = document.getElementById('total');

    let newProduct = {
        image: '',
        name: '',
        price: 0
    };

    switch (product) {
        case 'watch1':
            newProduct.image = 'anh/part1.png';
            newProduct.name = 'Chrono Gunmetal';
            newProduct.price = 7200000000; // 7.200.000.000 VND
            break;
        case 'watch2':
            newProduct.image = 'anh/part1.png';
            newProduct.name = 'Classic Black';
            newProduct.price = 9999999; // 9.999.999 VND
            break;
        // Add more cases as needed
        default:
            newProduct.image = 'anh/part1.png';
            newProduct.name = 'Chrono Gunmetal';
            newProduct.price = 1108121; // 1.108.121 VND
    }

    productImage.src = newProduct.image;
    productName.innerText = newProduct.name;
    productPrice.innerText = formatNumber(newProduct.price.toFixed(0)) + ' VND';
    subtotalElem.innerText = formatNumber(newProduct.price.toFixed(0)) + ' VND';

    const vat = parseNumber(document.getElementById('vat').innerText);

    totalElem.innerText = formatNumber((newProduct.price + vat).toFixed(0)) + ' VND';
}

// Gọi hàm changeProduct với sản phẩm mặc định
changeProduct('watch1');


