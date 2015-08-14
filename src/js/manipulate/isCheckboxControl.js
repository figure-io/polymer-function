'use strict';

// MODULES //

var isBooleanArray = require( 'validate.io-boolean-primitive-array' );


// IS CHECKBOX //

/**
* FUNCTION isCheckboxControl( item )
*	Checks whether control element is a checkbox.
*
* @param {Object} item - config element
* @returns {Boolean} true if config element is for a checkbox, false otherwise
*/
function isCheckboxControl( item ) {
	if ( item.hasOwnProperty( 'choices' ) ) {
		if ( isBooleanArray( item.choices ) ) {
			return true;
		} else {
			return false;
		}
	}
	return false;
} // end FUNCTION isCheckboxControl()

// EXPORTS //

module.exports = isCheckboxControl;
