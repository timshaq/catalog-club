"use strict";

import saleCard from './saleCard.js';
import btnBurger from './btnBurger.js';
import weekThingPopups from './weekThingPopups.js';
import serviceFaq from './serviceFaq.js';

document.addEventListener("DOMContentLoaded", function () {

	var header = document.getElementById('header');

	btnBurger();
	
	saleCard();

	weekThingPopups();

	serviceFaq();


});