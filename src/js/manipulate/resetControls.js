'use strict';

/**
* FUNCTION resetControls()
*	Removes all control elements from the current plot.
*
*/
function resetControls() {
	/* jshint validthis:true */
	var len;
	len = this.manipulate.length;
	this.splice( 'manipulate', 0, len );
} // end FUNCTION resetControls()

// EXPORTS //

module.exports = resetControls;
