'use strict';

/**
* FUNCTION: onSliderChange( evt )
*	Event handler invoked on a 'sliderChange' event.
*
* @param {Event} evt - event object
* @returns {Boolean} true
*/
	function onSliderChange( evt ) {
	/* jshint validthis:true */
	var model, item, domain;

	model = evt.model;
	item = model.item;

	// [0] Set parameter
	this[ item.name ] = item.value;

	// [1] Create new data points:
	this._resetData();

	// [2] Update the xDomain:
	domain = this._xDomain( this.xMin, this.xMax );

	// [3] Update the xScale:
	this._xScale.domain( domain );

	// [4] Update the yDomain:
	domain = this._yDomain( this.yMin, this.yMax );

	// [5] Update the yScale:
	this._yScale.domain( domain );

	if ( this.autoUpdate ) {
		// [6] Update the xAxis:
		this.$.xAxis.call( this._xAxis );

		// [7] Update the yAxis:
		this.$.yAxis.call( this._yAxis );

		// [8] Create new paths:
		this._resetPaths();
	}

	return true;
} // end FUNCTION onSliderChange()

// EXPORTS //

module.exports = onSliderChange;
