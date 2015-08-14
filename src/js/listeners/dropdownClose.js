'use strict';

/**
* FUNCTION: onDropdownClose( evt )
*	Event handler invoked on a 'dropdownClose' event.
*
* @param {Event} evt - event object
* @returns {Boolean} true
*/
function onDropdownClose( evt ) {
	/* jshint validthis:true */
	var detail,
		model,
		item,
		domain;

	detail = evt.detail;
	model = evt.model;
	item = model.item;
	
	// [0] Set parameter
	this[ item.name ] = item.choices[ detail.selected ];

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
} // end FUNCTION onDropdownClose()


// EXPORTS //

module.exports = onDropdownClose;
