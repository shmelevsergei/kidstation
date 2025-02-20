import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const sliderSection4 = () => {
	const slider = document.querySelector(".section_4__slider .swiper");
	const swiper = new Swiper(slider, {
		modules: [Navigation, Pagination],
		centeredSlides: true,
		initialSlide: 2,
		spaceBetween: 20,
		slidesPerView: "auto",

		navigation: {
			nextEl: ".section_4__slider .slider__navigation .button-next",
			prevEl: ".section_4__slider .slider__navigation .button-prev",
		},

		pagination: {
			el: ".section_4__slider .slider__pagitation",
			type: "fraction",
			renderFraction: function (currentClass, totalClass) {
				return (
					'<span class="' +
					currentClass +
					'"></span>' +
					"<span>/</span>" +
					'<span class="' +
					totalClass +
					'"></span>'
				);
			},
		},

		breakpoints: {
			1024: {
				spaceBetween: 60,
			},
		},
	});
};
