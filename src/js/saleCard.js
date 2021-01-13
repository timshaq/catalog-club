export default function () {

	const cardsNL = document.querySelectorAll('.sale-card');

	if (!cardsNL.length) return;


	const cardsList = Array.prototype.slice.call(cardsNL);

	cardsList.forEach(card => {

		const btn = card.querySelector('button.sale-card__link');

		btn.addEventListener('click', function() {
			if(card.classList.contains('open')) {
				card.classList.remove('open');
				btn.innerText = 'Подробнее >>';
			} else {
				card.classList.add('open');
				btn.innerText = 'Скрыть >>'
			}
		})

	})
}