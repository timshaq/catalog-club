export default function () {
const linksNL = document.querySelectorAll('.mob-link-with-tooltip')
const links = Array.prototype.slice.call(linksNL)

const vw = () => window.innerWidth;
console.log('vw = ', vw())

links.forEach(el => {
	el.addEventListener('click', function(ev) {
		if(vw() < 1200) {
			ev.preventDefault();
			links.forEach(link => link.parentElement.classList.remove('open'))
			const parentClass = el.parentElement.classList
			parentClass.contains('open') ? parentClass.remove('open') : parentClass.add('open')
		}
	})
})

}