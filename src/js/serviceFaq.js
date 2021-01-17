export default function () {

	const serviceFaqLiNL = document.querySelectorAll('.service-faq .service-faq__li');

	if (!serviceFaqLiNL.length) return;


	const serviceFaqLiList = Array.prototype.slice.call(serviceFaqLiNL);

	serviceFaqLiList.forEach(li => {
		li.addEventListener('click', function() {
			if(li.classList.contains('open')) {
				li.classList.remove('open');
			} else {
				li.classList.add('open');
			}
		})
	})

}