'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isBooleanArray = require( 'validate.io-boolean-primitive-array' ),
	isObject = require( 'validate.io-object' );


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

	if ( !(config.hasOwnProperty( 'name' ) ) ) {
		err = new Error( 'addControl::input argument must have `name` property. Keys: `' + Object.keys( config) );
		throw( err );
	}

	// Check that control element with the same `name` does not already exist
	for ( i = 0; i < this.manipulate.length; i++ ) {
		if ( this.manipulate[ i ].name === config.name ) {
			err = new Error( 'addControl::control element with name `' + config.name + '` already exists.' );
			throw( err );
		}
	}

	// Control element should be a slider:
	if ( config.hasOwnProperty( 'min' ) && config.hasOwnProperty( 'max' ) ) {
		// Set default value if not set by user
		if ( !config.value ) {
			config.value = ( config.max - config.min ) / 2;
		}
		this.push( 'manipulate', config );
		return;
	}

	// Control element should be a checkbox
	if ( config.hasOwnProperty( 'choices' ) && isBooleanArray( config.choices ) ) {
		if ( !config.value ) {
			config.value = config.choices[ 0 ];
		}
		this.push( 'manipulate', config );
		return;
	}

	// Control element should be a dropdown menu:
	if ( config.hasOwnProperty( 'choices' ) ) {
		if ( !isArray( config.choices ) ) {
			err = new Error( 'addControl::choices options must be an Array. Value: `' + config.choices + '`.' );
			throw( err );
		}
		// Set default value if not set by user
		if ( !config.value ) {
			config.value = 0;
		}
		this.push( 'manipulate', config );
		return;
	}

	// Control element should be an input field:
	if ( config.hasOwnProperty( 'value' ) ) {
		this.push( 'manipulate', config );
		return;
	}

} // end FUNCTION addControl()

// EXPORTS //

module.exports = addControl;
