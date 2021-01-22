"use strict";

import sliders from './sliders.js';
import btnBurger from './btnBurger.js';
import saleCard from './saleCard.js';
import weekThingPopups from './weekThingPopups.js';
import serviceFaq from './serviceFaq.js';
import printTable from './printTable.js';

document.addEventListener("DOMContentLoaded", function () {

	var header = document.getElementById('header');

	sliders();

	btnBurger();
	
	saleCard();

	weekThingPopups();

	serviceFaq();

	printTable();


});