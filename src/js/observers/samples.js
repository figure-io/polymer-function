'use strict';

// MODULES //

var isPositiveInteger = require( 'validate.io-positive-integer' );


// OBSERVER //

/**
* FUNCTION: samplesChanged( newVal, oldVal )
*	Event handler invoked when the `samples` property changes.
*
* @param {Number} newVal - new value
* @param {Number} oldVal - old value
*/
function samplesChanged( newVal, oldVal ) {
	/* jshint validthis: true */
	var err;
	if ( oldVal === void 0 ) {
		return;
	}
	if ( !isPositiveInteger( newVal ) ) {
		err = new TypeError( 'samples::invalid assignment. Must be a positive integer. Value: `' + newVal + '`.' );
		this.fire( 'err', err );
		this.samples = oldVal;
		return;
	}

	if ( !this.$.canvas ) {
		return;
	}
	if ( this.autoUpdate ) {
		// [1] Create new paths:
		this._resetPaths();
	}
	this.fire( 'samples', {
		'type': 'change'
	});
	this.fire( 'change', {
		'attr': 'samples',
		'prev': oldVal,
		'curr': newVal
	});
} // end FUNCTION samplesChanged()


// EXPORTS //

module.exports = samplesChanged;
