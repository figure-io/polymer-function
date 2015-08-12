'use strict';

// MODULES //

var uuid = require( 'node-uuid' ),
	cache = require( './cache.js' );

// FIXME: get rid of this dependency. Use polymer component.
var d3 = require( 'd3' );

// UTILS //

var x = require( './../utils/x.js' ),
	y = require( './../utils/y.js' );


// INIT //

/**
* FUNCTION: init()
*	Initialization.
*/
function init() {
	/* jshint validthis:true */

	// FIXME: use polymer component
	// var d3,
	// 	el;

	// // Create a new D3 element to access the library dependency:
	// el = document.createElement( 'polymer-d3' );
	// d3 = el.d3;
	this._d3 = d3;

	// Assign the chart a private uuid:
	this.__uid__ = uuid.v4();

	// Scales...
	this._xScale = d3.scale.linear();
	this._yScale = d3.scale.linear();

	this._xScale
		.domain( [ 0, 1 ] )
		.range( [ 0, this._graphWidth() ] );
	this._yScale
		.domain( [ 0, 1 ] )
		.range( [ this._graphHeight(), 0 ] );

	// Axes...

	this._xTickFormat = null;
	this._yTickFormat = null;

	this._xAxis = d3.svg.axis()
		.scale( this._xScale )
		.orient( this.xAxisOrient )
		.tickFormat( this._xTickFormat )
		.ticks( this.xNumTicks || 5 );

	this._yAxis = d3.svg.axis()
		.scale( this._yScale )
		.orient( this.yAxisOrient )
		.tickFormat( this._yTickFormat )
		.ticks( this.yNumTicks || 5 );

	// Paths
	this._x = x( this._xScale );
	this._y = y( this._yScale );

	this._line = d3.svg.line()
		.x( this._x )
		.y( this._y )
		.interpolate( this.interpolation )
		.tension( this.tension );

	/*
	this._triangle = triangle( this );
	this._vline = vline( this );
	*/

	// Extend the element cache...
	this.$ = cache( this.$ );

	// Clip path...
	this._clipPathID = uuid.v4();

	return this;
} // end FUNCTION init()


// EXPORTS //

module.exports = init;
