export default function () {

	const previewSlider = new Swiper('#previewSlider', {
		loop: true,
		centeredSlides: true,
		speed: 1000,
		autoplay: {
			delay: 3000,
		},
		disableOnInteraction: false,
		waitForTransition: true,
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
				slidesPerView: 'auto',
				spaceBetween: 30,
			},
		},

	})

	const brandsSlider = new Swiper('#brandsSlider', {
		navigation: {
			nextEl: '#brandsNextBtn',
			prevEl: '#brandsPrevBtn'
		},
		speed: 1000,
		autoplay: {
			delay: 3000,
		},
		disableOnInteraction: false,
		waitForTransition: true,
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

	const shopLineSlider = new Swiper('#shopLineSlider', {
		navigation: {
			nextEl: '#shopLineNextBtn',
			prevEl: '#shopLinePrevBtn'
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 80,
			},
		},

	})

	const asideFashionIdeasSlider = new Swiper('#fashionIdeasSlider', {
		slidesPerView: 1,
		spaceBetween: 0,
		navigation: {
			nextEl: '#fashionIdeasNextBtn',
			prevEl: '#fashionIdeasPrevBtn'
		},
		// breakpoints: {
		// 	320: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 10,
		// 	},
		// 	768: {
		// 		slidesPerView: 5,
		// 		spaceBetween: 23,
		// 	},
		// 	1200: {
		// 		slidesPerView: 7,
		// 		spaceBetween: 20,
		// 	},
		// },

	})

	const serviceAboutGalleriesNl = document.querySelectorAll('.service-about__gallery .swiper-container')
	const serviceAboutGalleriesEl = Array.prototype.slice.call(serviceAboutGalleriesNl);
		
	const serviceAboutGallery = new Swiper(serviceAboutGalleriesEl, {
		slidesPerView: 1.2,
		spaceBetween: 10,

	})

	const serviceLinksSliderEl = document.getElementById('serviceLinksSlider')

	const serviceLinksSlider = new Swiper(serviceLinksSliderEl, {
		slidesPerView: 1.3,
		spaceBetween: 10,
	})

	const instructionSliderEl = document.getElementById('instructionSlider')

	const instructionSlider = new Swiper(instructionSliderEl, {
		slidesPerView: 2.1,
		spaceBetween: 10,
	})

	const serviceRefundSliderEl = document.getElementById('serviceRefundSlider')

	const serviceRefundSlider = new Swiper(serviceRefundSliderEl, {
		slidesPerView: 2,
		spaceBetween: 10,
	})


// ORDER STEP 1

	const addProductSliderNextBtn = document.getElementById('addProductSliderNextBtn')
	const addProductSliderPrevBtn = document.getElementById('addProductSliderPrevBtn')
	

	const addProductPopupPaginationSliderEl = document.getElementById('addProductPopupPaginationSlider')

	const addProductPopupPaginationSlider = new Swiper(addProductPopupPaginationSliderEl, {
		slidesPerView: 1,
		spaceBetween: 0,
		allowTouchMove: false,
		navigation: {
			nextEl: addProductSliderNextBtn,
			prevEl: addProductSliderPrevBtn
		},
	})

	const addProductPopupProductsSliderEl = document.getElementById('addProductPopupProductsSlider')

	const addProductPopupProductsSlider = new Swiper(addProductPopupProductsSliderEl, {
		slidesPerView: 1,
		spaceBetween: 0,
		allowTouchMove: false,
		navigation: {
			nextEl: addProductSliderNextBtn,
			prevEl: addProductSliderPrevBtn
		},
	})

// ORDER STEP 1

	var mobSlidersArray = []
	
	if(serviceAboutGalleriesEl.length) {
		serviceAboutGallery.forEach(slider => {
			mobSlidersArray.push(slider)
		})
	}

	if(serviceLinksSliderEl) {
		mobSlidersArray.push(serviceLinksSlider)
	}

	if(instructionSliderEl) {
		mobSlidersArray.push(instructionSlider)
	}

	if(serviceRefundSliderEl) {
		mobSlidersArray.push(serviceRefundSlider)
	}

	if(addProductPopupProductsSliderEl) {
		mobSlidersArray.push(addProductPopupProductsSlider)
	}

	if(addProductPopupPaginationSliderEl) {
		mobSlidersArray.push(addProductPopupPaginationSlider)
	}

	function destroySliders(vw, mob = mobSlidersArray) {
		if(vw >= 768) {
			mob.forEach(slider => {
				slider.destroy(false,true)
				slider.el.removeAttribute('class')

				slider.wrapperEl.removeAttribute('class')
				slider.wrapperEl.classList.add(slider.el.parentElement.classList[0])

				slider.slides.forEach(li => {
					var className = li.classList[0]
					li.classList.remove('swiper-slide')
					li.removeAttribute('style')
					// li.classList.add(className)
				})
			})

		} else {
			mob.forEach(slider => {
				slider.el.classList.add('swiper-container')

				slider.wrapperEl.removeAttribute('class')
				slider.wrapperEl.classList.add('swiper-wrapper')

				slider.slides.forEach(li => {
					li.classList.add('swiper-slide')
				})

				slider.init()
				slider.navigation.init()
				slider.update()
			})
			
		}
	}

	if(!mobSlidersArray.length) return;

	window.onresize = function() {
	    destroySliders(window.innerWidth)
	};

	destroySliders(window.innerWidth)

}