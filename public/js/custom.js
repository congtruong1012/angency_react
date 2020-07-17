//Sự DOMContentLoadedkiện này kích hoạt khi tài liệu HTML ban đầu đã được tải và phân tích cú pháp hoàn toàn,
// không cần chờ biểu định kiểu, hình ảnh và khung con để tải xong.
window.addEventListener("DOMContentLoaded", function () {
  var btn_top = document.querySelector("a.back-to-top");
  window.onscroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      btn_top.classList.add("is--show");
    } else {
      btn_top.classList.remove("is--show");
    }
  };
  btn_top.addEventListener('click',()=>{
    if(window.scrollY > 0){
      window.scrollTo(0,0);
    }
  })
  // Show navbar mobile
  var btnBar = document.querySelector(".header__navbar-inner button");
  var navOverlay = document.querySelector(".nav__overlay");
  var listNavBar = document.querySelector(".header__navbar-collapse");
  var navClose = document.querySelector(".header__navbar-close");
  btnBar.addEventListener("click", function () {
    navOverlay.style.display = "block";
    listNavBar.classList.add("is--open");
  });
  navOverlay.addEventListener("click", function () {
    navOverlay.style.display = "none";
    listNavBar.classList.remove("is--open");
  });
  navClose.addEventListener("click", function () {
    navOverlay.style.display = "none";
    listNavBar.classList.remove("is--open");
  });

  var btns_slider = document.querySelectorAll(".testimonials__btn");
  var list_image = document.querySelectorAll(".testimonials__item-image");
  var list_member = document.querySelectorAll(".testimonials__item-member");
  var popup_overlay = document.querySelector(".testimonials__popup-overlay");
  var popup_content = document.querySelector(".testimonials__popup-content");
  var popup_list = document.querySelectorAll(".testimonials__popup-item");
  var popup_close = document.querySelector(".testimonials__popup-close");
  var slide_index = 1;
  showSlides(slide_index);
  function currentSlide(n) {
    showSlides((slide_index = n));
  }
  function showSlides(n) {
    var i;
    if (n > list_image.length) {
      slide_index = 1;
    }
    if (n < 1) {
      slide_index = list_image.length;
    }
    for (i = 0; i < list_image.length; i++) {
      list_image[i].style.display = "none";
    }
    for (i = 0; i < list_member.length; i++) {
      list_member[i].style.display = "none";
    }
    for (i = 0; i < btns_slider.length; i++) {
      btns_slider[i].classList.remove("is--active");
    }
    for (i = 0; i < popup_list.length; i++) {
      popup_list[i].style.display = "none";
    }
    list_image[slide_index - 1].style.display = "block";
    list_member[slide_index - 1].style.display = "block";
    btns_slider[slide_index - 1].classList.add("is--active");
    list_image[slide_index - 1].addEventListener("click", function () {
      popup_overlay.style.display = "block";
      popup_content.style.display = "block";
      popup_list[slide_index - 1].style.display = "block";
    });
  }
  popup_overlay.addEventListener("click", function () {
    this.style.display = "none";
    popup_content.style.display = "none";
  });
  popup_close.addEventListener("click", function () {
    popup_overlay.style.display = "none";
    popup_content.style.display = "none";
  });
});
