export default function () {

const target = document.getElementById('features');

const options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.1,
}

const fixFeatures = document.getElementById('fix-features');

const callback = function(entries, observer) {
	if(entries[0].isIntersecting) {
		// console.log('вижу')
		fixFeatures.classList.add('disable')
	} else {
		// console.log('не вижу')
		fixFeatures.classList.remove('disable')
	}
	
}
const observer = new IntersectionObserver(callback, options);

observer.observe(target)


}