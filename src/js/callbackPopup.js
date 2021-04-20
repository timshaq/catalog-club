export default function() {

	const callbackPopup = document.getElementById('callbackPopup');

	if (!callbackPopup) return;

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


	

	const callbackOpenNL = document.querySelectorAll('.callback-btn');
	const callbackOpen = Array.prototype.slice.call(callbackOpenNL);;
	const callbackClose = document.getElementById('callbackClose');

	callbackOpen.forEach(btn => {
		btn.addEventListener('click', () => openEl(callbackPopup));
	})

	// callbackClose.addEventListener('click', function() {
	// 	closeEl(callbackPopup);
	// })

	callbackPopup.addEventListener('click', function(ev) {
		if(ev.target === this) closeEl(callbackPopup);
	})

}