export default function () {

	const btnBurger = document.getElementById('btnBurger');

	if(!btnBurger) return;

	const menuTooltip = document.getElementById('menuTooltip');

	btnBurger.addEventListener('click', function() {

		if(menuTooltip.classList.contains('open')) {
			menuTooltip.classList.remove('open');
		} else {
			menuTooltip.classList.add('open');
			// menuTooltip.focus();
			// menuTooltip.onblur = function(ev) {
			// 	if(window.innerWidth < 768) return;
			// 	if(ev.relatedTarget === btnBurger) return;
			// 	menuTooltip.classList.remove('open');
			// };
		}

	})

	const liContainsNL = document.querySelectorAll('.menu-tooltip__li.contains');
	const liContainsList = Array.prototype.slice.call(liContainsNL);

	const liNonContainsNL = document.querySelectorAll('.menu-tooltip__li');
	const liNonContainsList = Array.prototype.slice.call(liContainsNL);

	liContainsList.forEach(li => {
		// console.log(li)
		li.addEventListener('click', function() {
			if(window.innerWidth >= 1200) return;

			if(li.classList.contains('open')) {
				liNonContainsNL.forEach(li => li.classList.remove('hidden'))
				li.classList.remove('open')
			} else {
				liNonContainsNL.forEach(li => li.classList.add('hidden'))
				li.classList.remove('hidden')
				li.classList.add('open')
			}

		})
	})



}