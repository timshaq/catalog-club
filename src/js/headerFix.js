export default function () {

	const header = document.getElementById('header');
	const headerFix = document.getElementById('headerFix');
	const headerFixMenuTooltip = document.getElementById('headerFixMenuTooltip');
	const headerFixBurgerBtn = document.getElementById('headerFixBurgerBtn');

function setHeaderFix() {
	let top = document.documentElement.scrollTop;
	if(top > 170) headerFix.classList.add('active')
	if(top < 170) headerFix.classList.remove('active')
}
document.addEventListener('scroll', function(ev) {
	setHeaderFix()
})
setHeaderFix();

headerFixBurgerBtn.addEventListener('click', function() {
	return (headerFixMenuTooltip.classList.contains('open')) ? headerFixMenuTooltip.classList.remove('open') : headerFixMenuTooltip.classList.add('open')
})



}