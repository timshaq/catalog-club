"use strict";

import sliders from './sliders.js';
import callbackPopup from './callbackPopup.js';
import btnBurger from './btnBurger.js';
import saleCard from './saleCard.js';
import reviews from './reviews.js';
import weekThingPopups from './weekThingPopups.js';
import serviceFaq from './serviceFaq.js';
import printTable from './printTable.js';
import orderAddPopup from './orderAddPopup.js';
import featuresFixPosition from './featuresFixPosition.js';
import pixelPerfect from './pixelPerfect.js';

document.addEventListener("DOMContentLoaded", function () {

	var header = document.getElementById('header');

	sliders();

	callbackPopup();

	btnBurger();
	
	saleCard();

	reviews();

	weekThingPopups();

	serviceFaq();

	printTable();

	orderAddPopup();

	featuresFixPosition();

	// pixelPerfect();

});