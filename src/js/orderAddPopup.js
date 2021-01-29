export default function() {


	const orderAddProduct = document.getElementById('orderAddProduct');

	if (!orderAddProduct) return;

	const html = document.getElementById('html')

	const orderAddProductPopup = document.getElementById('orderAddProductPopup')

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

	orderAddProduct.addEventListener('click', function() {
		openEl(orderAddProductPopup);
	})

	orderAddProductPopup.addEventListener('click', function(ev) {
		if(ev.target === this) closeEl(orderAddProductPopup);
	})


}