function myTest() {
  
  console.log('test')
  //Swiper Js Bundel

var swiper = new Swiper(".instituteThumbsSlider", {
  spaceBetween: 0,
  //loop: true,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".instituteSwiper", {
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
  },
  thumbs: {
    swiper: swiper,
  },
});

//news swiper
var swiper = new Swiper(".newsSwiper", {
slidesPerView: "auto",
spaceBetween: 30,
freeMode: true,
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
});
//events swiper
var swiper = new Swiper(".eventSwiper", {
slidesPerView: "auto",
spaceBetween: 0,
freeMode: true,
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
});
//Graduated
var swiper = new Swiper(".timelineYear", {
spaceBetween: 0,
slidesPerView: "auto",
freeMode: true,
watchSlidesProgress: true,
});
var swiper2 = new Swiper(".timelineContent", {
spaceBetween: 0,
slidesPerView: "auto",
thumbs: {
  swiper: swiper,
},
});

//manger swiper
var swiper = new Swiper(".managers-swiper", {
slidesPerView: "auto",
spaceBetween: 30,
freeMode: true,
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
});

//tablist swiper
var swiper = new Swiper(".tablistSwiper", {
slidesPerView: "auto",
spaceBetween: 10,

});
//tablist swiper
var swiper = new Swiper(".hListSwiper", {
slidesPerView: "auto",
spaceBetween: 15,
});
//tablist swiper
var swiper = new Swiper(".full-width", {
slidesPerView: "auto",
spaceBetween: 15,
pagination: {
  el: ".swiper-pagination",
},
});
//details slider
var swiper = new Swiper(".detailsSlideSwiper", {
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
pagination: {
  el: ".swiper-pagination",
},
});

  //show all article
  document.getElementById("showArticle").onclick = function() {showFunction()};
  var articleContainer = document.getElementsByClassName("article-container")[0];
  function showFunction() {
    articleContainer.classList.add("all-article");
    document.getElementById("showArticle").classList.add("d-none")
  }
}