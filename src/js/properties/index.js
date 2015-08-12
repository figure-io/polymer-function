'use strict';

// MODULES //


// PROPERTIES //

var props = {};

/**
* Chart canvas width. If not explicitly set, defaults to the width of the parent node.
*
* @type {Number}
* @default null
*/
props.width = {
	'observer': '_widthChanged',
	'type': Number,
	'value': null
};

/**
* Chart canvas height. If not explicitly set, defaults to the height of the parent node.
*
* @type {Number}
* @default null
*/
props.height = {
	'observer': '_heightChanged',
	'type': Number,
	'value': null
};

/**
* Chart canvas left padding.
*
* @type {Number}
* @default 90px
*/
props.paddingLeft = {
	'observer': '_paddingLeftChanged',
	'type': Number,
	'value': 90
};

/**
* Chart canvas right padding.
*
* @type {Number}
* @default 20px
*/
props.paddingRight = {
	'observer': '_paddingRightChanged',
	'type': Number,
	'value': 20
};

/**
* Chart canvas top padding.
*
* @type {Number}
* @default 80px
*/
props.paddingTop = {
	'observer': '_paddingTopChanged',
	'type': Number,
	'value': 80
};

/**
* Chart canvas bottom padding.
*
* @type {Number}
* @default 80px
*/
props.paddingBottom = {
	'observer': '_paddingBottomChanged',
	'type': Number,
	'value': 80
};

/**
* Chart title.
*
* @type {String}
* @default ''
*/
props.title = {
	'observer': '_titleChanged',
	'type': String,
	'value': ''
};

/**
* x-axis label.
*
* @type {String}
* @default 'x'
*/
props.xLabel = {
	'observer': '_xLabelChanged',
	'type': String,
	'value': 'x'
};

/**
* y-axis label.
*
* @type {String}
* @default 'y'
*/
props.yLabel = {
	'observer': '_yLabelChanged',
	'type': String,
	'value': 'y'
};

/**
* x-limit minimum value.
*
* @type {Number}
* @default 0
*/
props.xMin = {
	'observer': '_xMinChanged',
	'type': Number,
	'value': 0
};

/**
* x-limit maximum value.
*
* @type {Number}
* @default 1
*/
props.xMax = {
	'observer': '_xMaxChanged',
	'type': Number,
	'value': 1
};

/**
* y-limit minimum value. If `null`, the limit is computed from the data.
*
* @type {Null|Number}
* @default null
*/
props.yMin = {
	'observer': '_yMinChanged',
	'type': Number,
	'value': null
};

/**
* y-limit maximum value. If `null`, the limit is computed from the data.
*
* @type {Null|Number}
* @default null
*/
props.yMax = {
	'observer': '_yMaxChanged',
	'type': Number,
	'value': null
};

/**
* Number of tick marks on the x-axis. See [D3 documentation]{@link https://github.com/mbostock/d3/wiki/SVG-Axes#ticks}.
*
* @type {Number|Null}
* @default null
*/
props.xNumTicks = {
	'observer': '_xNumTicksChanged',
	'type': Number,
	'value': null
};

/**
* Number of tick marks on the y-axis. See [D3 documentation]{@link https://github.com/mbostock/d3/wiki/SVG-Axes#ticks}.
*
* @type {Number|Null}
* @default null
*/
props.yNumTicks = {
	'observer': '_yNumTicksChanged',
	'type': Number,
	'value': null
};

/**
* x-axis orientation. See [D3 documentation]{@link https://github.com/mbostock/d3/wiki/SVG-Axes#orient}.
*
* @type {String}
* @default 'bottom'
*/
props.xAxisOrient = {
	'observer': '_xAxisOrientChanged',
	'type': String,
	'value': 'bottom'
};

/**
* y-axis orientation. See [D3 documentation]{@link https://github.com/mbostock/d3/wiki/SVG-Axes#orient}.
*
* @type {String}
* @default 'left'
*/
props.yAxisOrient = {
	'observer': '_yAxisOrientChanged',
	'type': String,
	'value': 'left'
};

/**
* Boolean flag indicating whether a chart should auto update DOM elements whenever an attribute changes.
*
* @type {Boolean}
* @default true
*/
props.autoUpdate = {
	'observer': '_autoUpdateChanged',
	'type': Boolean,
	'value': true
};

/**
* Boolean flag indicating whether a chart should auto resize when the window resizes.
*
* @type {Boolean}
* @default true
*/
props.autoResize = {
	'observer': '_autoResizeChanged',
	'type': Boolean,
	'value': true
};

/**
* Public event names.
*
* @type {String[]}
*/
/*
props.events = {
	'readOnly': true,
	'value': function events() {
		return EVENTS.slice();
	}
};
*/

/**
* Specifies the type of interpolation applied to path elements. See [D3 documentation]{@link https://github.com/mbostock/d3/wiki/SVG-Shapes#line_interpolate}.
*
* @type {String}
* @default 'linear'
*/
props.interpolation = {
	'observer': '_interpolationChanged',
	'type': String,
	'value': 'linear'
};

/**
* Specifies the spline interpolation tension. See [D3 documentation]{@link https://github.com/mbostock/d3/wiki/SVG-Shapes#line_tension}.
*
* @type {Number}
* @default 0.7
*/
props.tension = {
	'observer': '_tensionChanged',
	'type': Number,
	'value': 0.7
};

/**
* Specifies the color of the plotted line.
*
* @type {String}
* @default 'black'
*/
props.color = {
	'observer': '_colorChanged',
	'type': String,
	'value': 'black'
};

// MODULE SPECIFIC //

/**
* Function to be plotted.
*
* @type {Function}
* @default identity function
*/
props.fun = {
	'observer': '_funChanged',
	'type': Function,
	'value': function fun() {
		return function( x ){
			return x;
		};
	}
};

/**
* Number of sample points for which the function is evaluated.
*
* @type {Number}
* @default 100
*/
props.samples = {
	'observer': '_samplesChanged',
	'type': Number,
	'value': 100
};

/**
* Object controlling the variables which can be manipulated by the user.
*
* @type {Object}
* @default empty object
*/
props.manipulate = {
	'observer': '_manipulateChanged',
	'type': Object,
	'value': function() {
		return {};
	}
};


// EXPORTS //

module.exports = props;
