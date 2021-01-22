export default function () {

const printBtn = document.getElementById('printBtn');

if(!printBtn) return;

const tableForPrint = document.getElementById('tableForPrint');


printBtn.addEventListener('click', () => window.print())

}