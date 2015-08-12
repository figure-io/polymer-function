'use strict';

// MODULES //

var isNumber = require( 'validate.io-number-primitive' );


// OBSERVER //

/**
* FUNCTION: xMinChanged( newVal, oldVal )
*	Event handler invoked when the `xMin` property changes.
*
* @param {Null|Number} newVal - new value
* @param {Null|Number} oldVal - old value
*/
function xMinChanged( newVal, oldVal ) {
	/* jshint validthis:true */
	var xScale = this._xScale,
		domain,
		err;
	if ( oldVal === void 0 ) {
		return;
	}
	if ( newVal !== null && !isNumber( newVal ) ) {
		err = new TypeError( 'xMin::invalid assignment. Must be a numeric or `null`. Value: `' + newVal + '`.' );
		this.fire( 'err', err );
		this.xMin = oldVal;
		return;
	}
	// [0] Update the domain:
	domain = xScale.domain();
	domain = this._xDomain( newVal, domain[ 1 ] );

	// [1] Update the xScale:
	xScale.domain( domain );

	if ( this.autoUpdate ) {
		// [2] Update the xAxis:
		this.$.xAxis.call( this._xAxis );

		// [3] Update the paths:
		this._resetPaths();
	}
	this.fire( 'xMin', {
		'type': 'change'
	});
	this.fire( 'change', {
		'attr': 'xMin',
		'prev': oldVal,
		'curr': newVal
	});
} // end FUNCTION xMinChanged()


// EXPORTS //

module.exports = xMinChanged;
