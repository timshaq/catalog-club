export default function() {

	const reviewsPopup = document.getElementById('reviewsPopup');

	if (!reviewsPopup) return;

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


	const reviewsPopupOpen = document.getElementById('reviewsPopupOpen');
	const reviewsPopupClose = document.getElementById('reviewsPopupClose');

	reviewsPopupOpen.addEventListener('click', () => openEl(reviewsPopup));

	reviewsPopupClose.addEventListener('click', function() {
		closeEl(reviewsPopup);
	})

	reviewsPopup.addEventListener('click', function(ev) {
		if(ev.target === this) closeEl(reviewsPopup);
	})

}