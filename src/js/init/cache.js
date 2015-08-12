'use strict';

/**
* FUNCTION: cache( $ )
*	Extends the element cache.
*
* @param {Object} element cache
* @returns {Object} element cache
*/
function cache( $ ) {
	// Base elements...
	$.root = null;
	$.canvas = null;
	$.clipPath = null;
	$.graph = null;
	$.bkgd = null;

	// Axis elements...
	$.xAxis = null;
	$.yAxis = null;
	$.xLabel = null;
	$.yLabel = null;

	// Meta elements...
	$.meta = null;
	$.title = null;

	// Legend elements...
	$.legend = null;
	$.legendEntries = null;
	$.legendSymbols = null;
	$.legendLabels = null;

	return $;
} // end FUNCTION cache()


// EXPORTS //

module.exports = cache;
