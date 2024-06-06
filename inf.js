const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

document.addEventListener('DOMContentLoaded', function() {
    // Lấy các nút đặt hàng
    const orderButtons = document.querySelectorAll('.order-btn');

    // Thêm sự kiện click cho mỗi nút
    orderButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            // Lấy thông tin từ data attributes
            const name = button.getAttribute('data-name');
            const year = button.getAttribute('data-year');
            const price = button.getAttribute('data-price');
            const seats = button.getAttribute('data-seats');
            const fuel = button.getAttribute('data-fuel');
            const consumption = button.getAttribute('data-consumption');
            const transmission = button.getAttribute('data-transmission');
            const images = JSON.parse(button.getAttribute('data-images'));

            // Cập nhật tiêu đề sản phẩm
            document.querySelector('.product-title').textContent = name;

            // Cập nhật giá sản phẩm
            document.querySelector('.product-price .new-price span').textContent = price;

            // Cập nhật mô tả sản phẩm
            document.querySelector('.product-description').textContent = `${name} ${year}`;

            // Cập nhật chi tiết sản phẩm
            document.querySelector('.product-color').textContent = fuel;
            document.querySelector('.product-availability').textContent = seats;
            document.querySelector('.product-category').textContent = consumption;
            document.querySelector('.product-shipping-area').textContent = transmission;
            document.querySelector('.product-shipping-fee').textContent = price;

            // Cập nhật hình ảnh
            const imgShowcase = document.querySelector('.img-showcase');
            const imgSelect = document.querySelector('.img-select');

            // Xóa tất cả hình ảnh hiện tại
            imgShowcase.innerHTML = '';
            imgSelect.innerHTML = '';

            // Thêm hình ảnh mới
            images.forEach((src, index) => {
                const img = document.createElement('img');
                img.src = src;
                imgShowcase.appendChild(img);

                const imgItem = document.createElement('div');
                imgItem.classList.add('img-item');
                imgItem.innerHTML = `<a href="#" data-id="${index + 1}"><img src="${src}" alt="${name}"></a>`;
                imgSelect.appendChild(imgItem);
            });

            // Cuộn lên đầu trang chi tiết sản phẩm
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});