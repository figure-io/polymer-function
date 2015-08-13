'use strict';

// OBSERVER //

/**
* FUNCTION manipulateChanged( oldVal, newVal )
*	Event handler invoked when the `manipulate` property changes.
*
* @param {Object} changeRecord - object with `keySplices` and `indexSplices`
*/
function manipulateChanged( changeRecord ) {
	/* jshint validthis:true */
	var self = this,
		item;

	if ( changeRecord ) {
		changeRecord.keySplices.forEach( function( s ) {
			if ( s.added.length === 1 ) {
				// Add a new control element
				item = self.manipulate[ s.index ];
				self[ item.name ] = item.value;
			}
		});

		changeRecord.indexSplices.forEach( function( s ) {
			// Display manipulate panel if at least one control element is present
			if ( s.object.length > 0 ) {
				self.$.manipulate.style.display = 'block';
			} else if ( s.object.length === 0 ) {
				// Do not display manipulate panel if no control elements are present
				self.$.manipulate.style.display = 'none';
			}
			// Remove properties from Polymer element
			s.removed.forEach( function( control ) {
				delete self[ control.name ];
			});
		});
	}
}  // end FUNCTION manipulateChanged()


// EXPORTS //

module.exports = manipulateChanged;
