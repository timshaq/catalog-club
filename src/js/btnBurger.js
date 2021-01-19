export default function () {

	const btnBurger = document.getElementById('btnBurger');

	if(!btnBurger) return;

	const menuTooltip = document.getElementById('menuTooltip');

	btnBurger.addEventListener('click', function() {

		if(menuTooltip.classList.contains('open')) {
			menuTooltip.classList.remove('open');
		} else {
			menuTooltip.classList.add('open');
			menuTooltip.focus();
			menuTooltip.onblur = function(ev) {
				if(ev.relatedTarget === btnBurger) return;
				menuTooltip.classList.remove('open');
			};
		}

	})


}