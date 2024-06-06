document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menuIcon");

    menuIcon.addEventListener("click", function() {
        if (menuIcon.classList.contains("fa-bars")) {
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-xmark");
            document.querySelector('.header__nav').style.display = 'flex'
        } else {
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
            document.querySelector('.header__nav').style.display = 'none'
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
      var hoverDanhMuc = document.querySelector('.header__nav-danhMuc');
      var danhMucList = document.querySelector('.header__nav-danhMuc-list');
      var danhMucTitle = document.querySelector('.header__nav-danhMuc-title');

      danhMucTitle.addEventListener('mouseenter', function() {
          danhMucList.style.display = 'flex';
      });

      document.addEventListener('mouseover', function(event) {
          if (!hoverDanhMuc.contains(event.target)) {
              danhMucList.style.display = 'none';
          }
      });
});

document.addEventListener("DOMContentLoaded", function() {
  var hovermuaxe = document.querySelector('.header__nav-muaxe');
  var muaxeList = document.querySelector('.header__nav-muaxe-list');
  var muaxeTitle = document.querySelector('.header__nav-muaxe-title');

  muaxeTitle.addEventListener('mouseenter', function() {
    muaxeList.style.display = 'flex';
  });

  document.addEventListener('mouseover', function(event) {
      if (!hovermuaxe.contains(event.target)) {
        muaxeList.style.display = 'none';
      }
  });
});


document.getElementById('header__nav-searchIcon').addEventListener('click', function() {
    document.getElementById('header__nav-searchInput').classList.toggle('showHeader__nav-searchInput');
});

var typed = new Typed('.trangchu__dongchu', {
    strings: ["khám phá thế giới trong tầm tay của bạn.", "trải nghiệm lái thử mọi cung đường.", "có sự tin cậy và hiệu suất tuyệt vời đến chúng tôi.", "dịch vụ chăm sóc khách hàng 24/7.", "mỗi chuyến đi là một cuộc phiêu lưu mới.", "tạo nên những kỷ niệm đáng nhớ trên mọi cung đường.", "lựa chọn hoàn hảo cho cuộc sống hiện đại."],
    typeSpeed: 100,
    backSpeed: 50,
    delaySpeed: 1000,
    loop: true,
})
ScrollReveal().reveal('.trangchu__img img', {
    duration: 2000,
    scale: 0.5,
    origin: 'top', // Phóng to từ phía trên
    distance: '50px', // Khoảng cách di chuyển
    easing: 'cubic-bezier(0.5, 0, 0, 1)', // Hiệu ứng di chuyển
    reset: true // Reset lại hiệu ứng khi cuộn lại trang
});

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
})
ScrollReveal().reveal('.trangchu__noidung h2, .headingSPAN', {origin: 'top'})
ScrollReveal().reveal('.xemoi label', {origin: 'right'})
ScrollReveal().reveal('.trangchu__noidung p, .box, .home-title, .home-text1 span, .hangtrinhbay h2, .hangtrinhbayP, .hangtrinhbay__dongsanpham-sp, .heading p, .review-container', {origin: 'bottom'})
ScrollReveal().reveal('.trangchu__noidung, .xemoi h2, .heading h2', {origin: 'left'})


var swiper = new Swiper('.slideshow__xemoi', {
  loop: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
});