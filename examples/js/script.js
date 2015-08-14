(function() {
	'use strict';

	// SCRIPT //

	var figs,
		len,
		charts,
		el,
		i;

	// [0] Grab chart elements...
	figs = document.querySelectorAll( '.figure' );

	len = figs.length;
	charts = new Array( len );
	for ( i = 0; i < len; i++ ) {
		charts[ i ] = figs[ i ].querySelector( '.chart' );
	}

	// [1] Configure the second figure...
	el = charts[ 1 ];

	el.xMin = 0;
	el.xMax = 4;
	el.yMin = 0;
	el.yMax = 60;
	el.xLabel = 'x-axis';
	el.yLabel = 'y-axis';
	el.color = 'blue';

	el.addControls([
		{
			'name':'a',
			'min':0,
			'max':4
		},
		{
			'name':'b',
			'min':0,
			'max':30,
			'step':1
		},
		{
			'name': 'log',
			'choices': [ false, true ]
		},
		{
			'name': 'width',
			'min': 400,
			'max': 800,
			'value': 400
		},
		{
			'name': 'xAxisOrient',
			'choices': [
				'bottom',
				'top'
			]
		},
		{
			'name': 'color',
			'value': 'red'
		}
	]);
	el.fun = function( x ) {
		var ret = this.a * Math.pow( x, 2 ) + this.b;
		return ( this.log ) ? Math.log( ret ) : ret;
	};

})();
