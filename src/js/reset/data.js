'use strict';

// MODULES //

var linspace = require( 'compute-linspace' );


// RESET DATA //

/**
* FUNCTION resetData()
*	Resets data points.
*
* @returns {Object} context
*/
function resetData() {

	/* jshint validthis:true */
	var data = [],
		x, y,
		xVals,
		i;

	xVals = linspace( this.xMin, this.xMax, this.samples );

	for ( i = 0; i < xVals.length; i++ ) {
		x = xVals[ i ];
		y = this.fun( x );
		data.push( [ x, y ] );
	}

	this._data = data;

	return this;
} // end FUNCTION resetData()


// EXPORTS //

module.exports = resetData;
