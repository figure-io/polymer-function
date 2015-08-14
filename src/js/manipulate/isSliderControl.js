'use strict';

/**
* FUNCTION isSliderControl( item )
*	Checks whether control element is a numeric slider.
*
* @param {Object} item - config element
* @returns {Boolean} true if item is a numeric control element, false otherwise
*/
function isSliderControl( item ) {
	// Use duct typing:
	return ( item.hasOwnProperty( 'min' ) && item.hasOwnProperty( 'max' ) ) ? true : false;
} // end FUNCTION isNumericControl()


// EXPORTS //

module.exports = isSliderControl;
