'use strict';

// MODULES //

var isBooleanArray = require( 'validate.io-boolean-primitive-array' );


// IS DROPDOWN //

/**
* FUNCTION isDropdownControl( item )
*	Checks whether control element should be a dropdown menu.
*
* @param {Object} item - config element
* @returns {Boolean} true if config element is for a dropdown menu, false otherwise
*/
function isDropdownControl( item ) {
	if ( item.hasOwnProperty( 'choices' ) ) {
		if ( !isBooleanArray( item.choices) ) {
			return true;
		} else {
			return false;
		}
	}
	return false;
} // end FUNCTION isDropdownControl()

// EXPORTS //

module.exports = isDropdownControl;
