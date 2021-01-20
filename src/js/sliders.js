export default function () {

	const previewSlider = new Swiper('#previewSlider', {
		loop: true,
		centeredSlides: true,
		pagination: {
			el: '#previewPagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
			nextEl: '#previewNextBtn',
			prevEl: '#previewPrevBtn'
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 1.58,
				spaceBetween: 30,
			},
			1200: {
				slidesPerView: 1.622,
				spaceBetween: 30,
			},
		},

	})

	const brandsSlider = new Swiper('#brandsSlider', {
		pagination: {
			el: '#previewPagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
			nextEl: '#brandsNextBtn',
			prevEl: '#brandsPrevBtn'
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 5,
				spaceBetween: 23,
			},
			1200: {
				slidesPerView: 7,
				spaceBetween: 20,
			},
		},

	})

}