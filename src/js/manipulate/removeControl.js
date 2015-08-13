'use strict';

// MODULES //

var isString = require( 'validate.io-string-primitive' );


// REMOVE CONTROL //

/**
* FUNCTION removeControl( name )
*	Removes the control element with the supplied `name`.
*
* @param {String} name - name of the control element to be removed
*/
function removeControl( name ) {
	/* jshint validthis:true */
	var err,
		success = false,
		len,
		i, id;

	if ( !isString( name ) ) {
		err = new TypeError( 'removeControl::argument has to be a string primitive.' );
		throw( err );
	}

	len = this.manipulate.length;
	for ( i = 0; i < len; i++ ) {
		if ( this.manipulate[ i ].name === name ) {
			id = i;
			success = true;
			this.splice( 'manipulate', id, 1 );
			break;
		}
	}
	return success;
} // end FUNCTION removeControl()


// EXPORTS //

module.exports = removeControl;
