'use strict';

// MODULES //

var isString = require( 'validate.io-string-primitive' );


// OBSERVER //

/**
* FUNCTION: colorChanged( newVal, oldVal )
*	Event handler invoked when the `color` property changes.
*
* @param {String|Array} newVal - new value
* @param {String|Array} oldVal - old value
*/
function colorChanged( newVal, oldVal ) {
	/* jshint validthis:true */
	var err;

	if ( oldVal === void 0 ) {
		return;
	}
	if ( !isString( newVal ) ) {
		err = new TypeError( 'color::invalid assignment. Property must be a string primitive. Value: `' + newVal + '`.' );
		this.fire( 'err', err );
		this.color = oldVal;
		return;
	}

	if ( this.autoUpdate ) {
		this.$.paths.attr( 'stroke', this.color );
	}
	this.fire( 'color', {
		'type': 'change'
	});
	this.fire( 'change', {
		'attr': 'color',
		'prev': oldVal,
		'curr': newVal
	});
} // end FUNCTION colorChanged()


// EXPORTS //

module.exports = colorChanged;
