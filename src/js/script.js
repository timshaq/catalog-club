"use strict";

import saleCard from './saleCard.js';
import weekThingPopups from './weekThingPopups.js';

document.addEventListener("DOMContentLoaded", function () {

	var header = document.getElementById('header');

	saleCard();

	weekThingPopups();


});