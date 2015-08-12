'use strict';

// MODULES //

var isNumber = require( 'validate.io-number-primitive' );


// X-DOMAIN //

/**
* FUNCTION: xDomain( min, max )
*	Computes the x-domain.
*
* @param {Null|Number} min - minimum value
* @param {Null|Number} max - maximum value
* @returns {Array} domain
*/
function xDomain( min, max ) {
	/* jshint validthis:true */
	var d3 = this._d3,
		data = this._data,
		err;

	if ( min !== null && !isNumber( min ) ) {
		err = new TypeError( 'xDomain()::invalid input argument. Minimum value must be numeric or `null`. Value: `' + min + '`.' );
		this.fire( 'err', err );
		return;
	}
	if ( max !== null && !isNumber( max ) ) {
		err = new TypeError( 'xDomain()::invalid input argument. Maximum value must be numeric or `null`. Value: `' + max + '`.' );
		this.fire( 'err', err );
		return;
	}
	if ( min === null ) {
		min = d3.min( data, function onDatum( d ) {
			return d[ 0 ];
		});
	}
	if ( max === null ) {
		max = d3.max( data, function onDatum( d ) {
			return d[ 0 ];
		});
	}
	return [ 1.05 * min, max * 1.05 ];
} // end FUNCTION xDomain()


// EXPORTS //

module.exports = xDomain;
