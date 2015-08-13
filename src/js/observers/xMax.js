'use strict';

// MODULES //

var isNumber = require( 'validate.io-number-primitive' );


// OBSERVER //

/**
* FUNCTION: xMaxChanged( newVal, oldVal )
*	Event handler invoked when the `xMax` property changes.
*
* @param {Null|Number} newVal - new value
* @param {Null|Number} oldVal - old value
*/
function xMaxChanged( newVal, oldVal ) {
	/* jshint validthis:true */
	var xScale = this._xScale,
		domain,
		err;
	if ( oldVal === void 0 ) {
		return;
	}
	if ( newVal !== null && !isNumber( newVal ) ) {
		err = new TypeError( 'xMax::invalid assignment. Must be numeric or `null`. Value: `' + newVal + '`.' );
		this.fire( 'err', err );
		this.xMax = oldVal;
		return;
	}
	// [0] Update the domain:
	domain = xScale.domain();
	domain = this._xDomain( domain[ 0 ], newVal );

	// [1] Update the xScale:
	xScale.domain( domain );

	// [2] Create new data points:
	this._resetData();

	// [3] Update the yDomain:
	domain = this._yDomain( this.yMin, this.yMax );

	// [4] Update the yScale:
	this._yScale.domain( domain );

	if ( this.autoUpdate ) {
		// [5] Update the xAxis:
		this.$.xAxis.call( this._xAxis );

		// [6] Update the yAxis:
		this.$.yAxis.call( this._yAxis );

		// [7] Update the paths:
		this._resetPaths();
	}
	this.fire( 'xMax', {
		'type': 'change'
	});
	this.fire( 'change', {
		'attr': 'xMax',
		'prev': oldVal,
		'curr': newVal
	});
} // end FUNCTION xMaxChanged()


// EXPORTS //

module.exports = xMaxChanged;
