'use strict';

// MODULES //

var isObjectArray = require( 'validate.io-object-array' );


// OBSERVER

/**
* FUNCTION manipulateChanged( oldVal, newVal )
*	Event handler invoked when the `manipulate` property changes.
*
* @param {Object} newVal - new value
* @param {Object} oldVal - old value
*/
function manipulateChanged( newVal, oldVal ) {
	/* jshint validthis:true */
	var err;

	if ( oldVal === void 0 ) {
		return;
	}
	if ( !isObjectArray( newVal ) ) {
		err = new TypeError( 'manipulate::invalid assignment. Must be an object. Value: `' + newVal + '`.' );
		this.fire( 'err', err );
		this.manipulate = oldVal;
		return;
	}
	if ( this.autoUpdate ) {
		// [1] Create new controls:
		this._resetControls( newVal );
	}

	this.fire( 'change', {
		'attr': 'manipulate',
		'prev': oldVal,
		'curr': newVal
	});
}  // end FUNCTION manipulateChanged()


// EXPORTS //

module.exports = manipulateChanged;
