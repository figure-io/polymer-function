'use strict';

/**
* FUNCTION: resetControls( manipulate )
*	Resets control elements.
*
* @param {Object} manipulate - new manipulate control elements
* @returns {Object} context
*/
function resetControls( manipulate ) {
	/* jshint validthis:true */
	var elems;

	// Bind the data and update existing elements:
	elems = this.$.controls
		.data( manipulate );

	// Remove any old control elements:
	elems.exit().remove();

	// Add any new control elements:
	elems.enter().append( 'div' )
		.attr( 'class', 'control' )
		.html( function( d ) {
			return '<div>' + d.name + '</div><paper-slider class="slider" editable="true"></paper-slider>';
		});

	// Cache a reference to the control elements:
	this.$.controls = elems;

	return this;
} // end FUNCTION resetControls()


// EXPORTS //

module.exports = resetControls;
