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

	const serviceAboutGalleriesEl = document.querySelectorAll('.service-about__gallery .swiper-container')

	const serviceAboutGallery = new Swiper(serviceAboutGalleriesEl, {
		slidesPerView: 1.2,
		spaceBetween: 10,

	})

	const serviceLinksSliderEl = document.getElementById('serviceLinksSlider')

	const serviceLinksSlider = new Swiper(serviceLinksSliderEl, {
		slidesPerView: 1.3,
		spaceBetween: 10,
	})
	const serviceLinksSliderCont = serviceLinksSlider.el
	const serviceLinksSliderWrap = serviceLinksSlider.wrapperEl
	// const serviceLinksSliderLiNL = serviceLinksSliderCont.querySelectorAll('.service-links__li');
	const serviceLinksSliderLiList = serviceLinksSlider.slides;

	var mobSlidersArray = []

	if(serviceAboutGalleriesEl.length) {
		serviceAboutGallery.forEach(slider => {
			mobSlidersArray.push(slider)
		})
	}

	if(serviceLinksSliderEl) {
		mobSlidersArray.push(serviceLinksSlider)
	}

	function destroySliders(vw, mob = mobSlidersArray) {
		if(vw >= 768) {
			mob.forEach(slider => {
				console.log(slider.el.parentElement.className)
				slider.destroy(false,true)
				slider.el.removeAttribute('class')

				slider.wrapperEl.removeAttribute('class')
				slider.wrapperEl.classList.add(slider.el.parentElement.className)

				slider.slides.forEach(li => {
					var className = li.classList[0]
					li.removeAttribute('class')
					li.removeAttribute('style')
					li.classList.add(className)
				})
			})

		} else {
			mob.forEach(slider => {
				slider.el.classList.add('swiper-container')

				slider.wrapperEl.classList.add('swiper-wrapper')

				slider.slides.forEach(li => {
					li.classList.add('swiper-slide')
				})

				slider.init()
			})
			
		}
	}

	if(!serviceLinksSliderCont) return;

	window.onresize = function() {
	    destroySliders(window.innerWidth)
	};

	destroySliders(window.innerWidth)

}