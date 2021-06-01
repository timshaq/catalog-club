export default function () {

	const pixelPerfect = document.getElementById('pixelPerfect');
	const pixelPerfectToggler = document.getElementById('pixelPerfectToggler');

	pixelPerfectToggler.addEventListener('click', function() {
		(pixelPerfect.classList.contains('active'))
		? pixelPerfect.classList.remove('active')
		: pixelPerfect.classList.add('active')
	})



}