export default function() {



	const thingsNL = document.querySelectorAll('.week-thing__thing.thing');

	if (!thingsNL.length) return;

	const thingsList = Array.prototype.slice.call(thingsNL);

	const html = document.getElementById('html')

	function disableScroll() {
		html.style.overflowX = 'hidden';
		html.style.overflowY = 'hidden';
	};

	function enableScroll() {
		html.style.overflowX = 'hidden';
		html.style.overflowY = 'scroll';
	};

	function closeEl(el) {
		el.classList.remove('open');
		enableScroll();
	}

	function openEl(el) {
		el.classList.add('open');
		disableScroll();
	}




	const popup = document.getElementById('week-thing-popup');
	const popupClose = popup.querySelector('.popup__close');
	const popupImg = popup.querySelector('.popup__ph');
	const popupText = popup.querySelector('.popup__article');

	thingsList.forEach(thing => {
		console.log('clicl')

		thing.addEventListener('click', function() {

			if(popup.classList.contains('open')) {
				closeEl(popup);
			} else {
				const thingImg = thing.querySelector('.thing__ph').getAttribute('src');
				popupImg.setAttribute('src', thingImg);

				var textForPopup = thing.querySelector('.thing__popup-text').innerText;

				// console.log(textForPopup)

				if(!textForPopup) textForPopup = 'Описание не найдено';

				popupText.innerText = textForPopup;

				openEl(popup);
			}

		})

	})

	popupClose.addEventListener('click', function() {
		closeEl(popup);
	})

	popup.addEventListener('click', function(ev) {
		if(ev.target === this) closeEl(popup);
	})

}