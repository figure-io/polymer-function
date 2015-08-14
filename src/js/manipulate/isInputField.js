'use strict';

/**
* FUNCTION isInputField( config )
*	Checks whether control element should be an input field.
*
* @param {Object} item - config element
* @returns {Boolean} true if config element is for an input field, false otherwise
*/
function isInputField( config ) {
	return ( config.hasOwnProperty( 'name' ) && config.hasOwnProperty( 'value') &&
		Object.keys( config).length === 2 ) ? true : false;
} // end FUNCTION isInputField()

// EXPORTS //

module.exports = isInputField;
