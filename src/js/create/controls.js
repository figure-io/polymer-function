'use strict';

/**
* FUNCTION: createControls()
*	Creates a controls element.
*
* @returns {Object} context
*/
function createControls() {
	/* jshint validthis:true */
	// Remove any existing background...
	if ( this.$.controls ) {
		this.$.controls.remove();
	}
	this.manipulate = [{
		'name': 'lambda'
	}];


	var controlElemsDIV = this._d3.select( this.$.controlElems );
	this.$.controls = controlElemsDIV.selectAll( 'div' )
		.data( this.manipulate )
		.enter()
		.append( 'div' )
			.attr( 'class', 'control' )
			.html( function( d ) {
				return '<div>' + d.name + '</div><paper-slider class="slider" editable="true"></paper-slider>';
			});

	return this;
} // end FUNCTION createBackground()


// EXPORTS //

module.exports = createControls;
