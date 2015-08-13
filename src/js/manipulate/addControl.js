'use strict';

// MODULES //

var isObject = require( 'validate.io-object' );


// ADD CONTROL //

/**
* FUNCTION addControl( config )
*	Adds a control element as specified by `config`.
*
* @param {Object} config - configuration object for control element
*/
function addControl( config ) {
	/* jshint validthis:true */
	var err,
		i;

	if ( !isObject( config ) ) {
		err = new TypeError( 'addControl::input argument has to be an object. Value: `' + config + '`' );
		throw( err );
	}

	if ( !(config.hasOwnProperty( 'name' ) &&
		config.hasOwnProperty( 'min' ) && config.hasOwnProperty( 'max' ) )
	) {
		err = new Error( 'addControl::input argument must have `name`, min` and `max` properties. Keys: `' + Object.keys( config) );
		throw( err );
	}

	// Check that control element with the same `name` does not already exist
	for ( i = 0; i < this.manipulate.length; i++ ) {
		if ( this.manipulate[ i ].name === config.name ) {
			err = new Error( 'addControl::control element with name `' + config.name + '` already exists.' );
			throw( err );
		}
	}

	// Set default value if not set by user
	if ( !config.value ) {
		config.value = ( config.max - config.min ) / 2;
	}

	this.push( 'manipulate', config );
} // end FUNCTION addControl()

// EXPORTS //

module.exports = addControl;
