'use strict';

/**
* FUNCTION: createPaths()
*	Creates graph path elements.
*
* @returns {Object} context
*/
function createPaths() {
	/* jshint validthis:true */

	// Remove any existing marks...
	if ( this.$.marks ) {
		this.$.marks.remove();
	}
	// Create a `marks` group:
	this.$.marks = this.$.graph.append( 'svg:g' )
		.attr( 'property', 'marks' )
		.attr( 'class', 'marks' )
		.attr( 'clip-path', 'url(#' + this._clipPathID + ')' );

	// Add paths:
	this.$.paths = this.$.marks.selectAll( '.line' )
		.data( [this._data] )
		.enter()
		.append( 'svg:path' )
			.attr( 'property', 'line' )
			.attr( 'class', 'line' )
			.attr( 'stroke', this.color )
//			.attr( 'data-label', this._getLabel )
			.attr( 'd', this._line );

	return this;
} // end FUNCTION createPaths()


// EXPORTS //

module.exports = createPaths;
