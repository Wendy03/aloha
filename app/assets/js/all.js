$(document).ready(() => {
  $("#dropdownDate").daterangepicker();
});

var swiper = new Swiper(".swiper-top", {
	slidesPerView: 1.3,
	spaceBetween: 30,
	loop: true,
	breakpoints: {
		767: {
			slidesPerView: 2
		},
		991: {
			slidesPerView: 3
		},
		1200: {
			slidesPerView: 4
		}
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	}
});
var swiper = new Swiper(".swiper-inspiration", {
	slidesPerView: 1.5,
	spaceBetween: 30,
	loop: true,
	breakpoints: {
		767: {
			slidesPerView: 2
		},
		991: {
			slidesPerView: 3
		}
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	}
});
