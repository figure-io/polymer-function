'use strict';

// MODULES //

var isFunction = require( 'validate.io-function' );


// OBSERVER //

/**
* FUNCTION: funChanged( newVal, oldVal )
*	Event handler invoked when the `fun` property changes.
*
* @param {Function} newVal - new value
* @param {Function} oldVal - old value
*/
function funChanged( newVal, oldVal ) {
	/* jshint validthis:true */
	var domain,
		err;
	if ( oldVal === void 0 ) {
		return;
	}
	if ( !isFunction( newVal ) ) {
		err = new TypeError( 'fun::invalid assignment. Function must be a function.' );
		this.fire( 'err', err );
		return;
	}
	// Do we even have a data array?
	if ( !newVal.length ) {
		if ( this.$.paths ) {
			this.$.paths.remove();
		}
		return;
	}
	// [0] Create new data points:
	this._resetData();

	// [1] Update the xDomain:
	domain = this._xDomain( this.xMin, this.xMax );

	// [2] Update the xScale:
	this._xScale.domain( domain );

	// [3] Update the yDomain:
	domain = this._yDomain( this.yMin, this.yMax );

	// [4] Update the yScale:
	this._yScale.domain( domain );

	if ( this.autoUpdate ) {
		// [5] Update the xAxis:
		this.$.xAxis.call( this._xAxis );

		// [6] Update the yAxis:
		this.$.yAxis.call( this._yAxis );

		// [7] Create new paths:
		this._resetPaths();
	}
	this.fire( 'fun', {
		'type': 'change'
	});
	this.fire( 'change', {
		'attr': 'fun',
		'prev': oldVal,
		'curr': newVal
	});
} // end FUNCTION funChanged()


// EXPORTS //

module.exports = funChanged;
