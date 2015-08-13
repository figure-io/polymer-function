'use strict';

// MODULES //

var isArray = require( 'validate.io-array' );


// FUNCTIONS //

var addControl = require( './addControl.js' );


// ADD CONTROLS //

/**
* FUNCTION addControls( arr )
*	Add multiple control elements at once.
*
* @param {Array} arr - array of config objects
*/
function addControls( arr ) {
	/* jshint validthis:true */
	var err,
		len,
		i;

	if ( !isArray( arr ) ) {
		err = new TypeError( 'addControls::Input argument has to be an array. Value: `' + arr + '`' );
		throw( err );
	}

	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		addControl.call( this, arr[ i ] );
	}
} // end FUNCTION addControls()


// EXPORTS //

module.exports = addControls;
