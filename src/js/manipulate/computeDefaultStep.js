'use strict';

// MODULES //

var isNumber = require( 'validate.io-number-primitive' );


// DEFAULT STEP SIZE //

/**
* FUNCTION computeDefaultStep( item )
*	Computes the default step size for the slider element.
*
*/
function computeDefaultStep( item ) {
	var step,
		range,
		err;

	if ( item.step ) {
		if ( !isNumber( item.step ) ) {
			err = new TypeError( 'Step property must be a number primitive.' );
			throw( err );
		}
		step = item.step;
	} else {
		range = item.max - item.min;
		step = Math.round( range / 20 );
	}

	return step;
} // end FUNCTION computeDefaultStep()


// EXPORTS //

module.exports = computeDefaultStep;
