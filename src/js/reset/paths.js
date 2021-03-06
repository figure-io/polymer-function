'use strict';

/**
* FUNCTION: resetPaths()
*	Resets graph path elements.
*
* @returns {Object} context
*/
function resetPaths() {
	/* jshint validthis:true */
	var paths;

	// Bind the data and update existing paths:
	paths = this.$.marks.selectAll( '.line' )
		.data( [this._data] )
		.attr( 'd', this._line );

	// Remove any old paths:
	paths.exit().remove();

	// Add any new paths:
	paths.enter().append( 'svg:path' )
		.attr( 'property', 'line' )
		.attr( 'class', 'line' )
//		.attr( 'data-label', this._getLabel )
		.attr( 'stroke', this.color )
		.attr( 'd', this._line );

	// Cache a reference to the paths:
	this.$.paths = paths;

	return this;
} // end FUNCTION resetPaths()


// EXPORTS //

module.exports = resetPaths;
