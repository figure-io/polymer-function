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
	el.xMax = 1;
	el.xLabel = 'x-axis';
	el.yLabel = 'y-axis';
	el.title = 'Example Plot';
	el.color = 'blue';
	/*
	el.labels = [
		'cpu.utilization',
		'mem.utilization',
		'disk.utilization'
	];
	*/
	/*
	el.annotations = [
		[ 1417564926959, 'beep boop bap foo' ]
	];
	*/


})();
