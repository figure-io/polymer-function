'use strict';

// ELEMENT //

var element = {};


// NAME //

element.is = require( './name' );


// PROPERTIES //

element.properties = require( './properties' );

// MULTI-PROPERTY AND ARRAY OBSERVERS //

element.observers = [
	'_manipulateChanged(manipulate.splices)'
];


// LIFECYCLE //

element.created = require( './lifecycle/created.js' );

element.ready = require( './lifecycle/ready.js' );

element.attached = require( './lifecycle/attached.js' );

element.detached = require( './lifecycle/detached.js' );


// INIT //

element._init = require( './init' );


// CHART CREATION //

element._create = require( './create' );

element._createBase = require( './create/base.js' );

element._createBackground = require( './create/background.js' );

element._createData = require( './create/data.js' );

element._createPaths = require( './create/paths.js' );

element._createAxes = require( './create/axes.js' );

element._createTitle = require( './create/title.js' );


// RESET //

element._resetData = require( './reset/data.js' );

element._resetPaths = require( './reset/paths.js' );


// LISTENERS //

element._addListeners = require( './listeners/add.js' );

element._removeListeners = require( './listeners/remove.js' );

element.onSliderChange = require( './listeners/sliderChange.js' );


// OBSERVERS //

element._colorChanged = require( './observers/color.js' );

element._widthChanged = require( './observers/width.js' );

element._heightChanged = require( './observers/height.js' );

element._paddingLeftChanged = require( './observers/paddingLeft.js' );

element._paddingRightChanged = require( './observers/paddingRight.js' );

element._paddingTopChanged = require( './observers/paddingTop.js' );

element._paddingBottomChanged = require( './observers/paddingBottom.js' );

element._titleChanged = require( './observers/title.js' );

element._xLabelChanged = require( './observers/xLabel.js' );

element._yLabelChanged = require( './observers/yLabel.js' );

element._xMinChanged = require( './observers/xMin.js' );

element._xMaxChanged = require( './observers/xMax.js' );

element._yMinChanged = require( './observers/yMin.js' );

element._yMaxChanged = require( './observers/yMax.js' );

element._xNumTicksChanged = require( './observers/xNumTicks.js' );

element._yNumTicksChanged = require( './observers/yNumTicks.js' );

element._xAxisOrientChanged = require( './observers/xAxisOrient.js' );

element._yAxisOrientChanged = require( './observers/yAxisOrient.js' );

element._interpolationChanged = require( './observers/interpolation.js' );

element._tensionChanged = require( './observers/tension.js' );

element._autoResizeChanged = require( './observers/autoResize.js' );

element._autoUpdateChanged = require( './observers/autoUpdate.js' );

element._funChanged = require( './observers/function.js' );

element._samplesChanged = require( './observers/samples.js' );

element._manipulateChanged = require( './observers/manipulate.js' );


// MANIPULATE //

element._computeDefaultStep = require( './manipulate/computeDefaultStep.js' );

// PUBLIC CONTROL METHODS //

element.addControl = require( './manipulate/addControl.js' );

element.removeControl = require( './manipulate/removeControl.js' );

element.addControls = require( './manipulate/addControls' );

element.resetControls = require( './manipulate/resetControls.js' );

// UTILS //

element._graphWidth = require( './utils/graphWidth.js' );

element._graphHeight = require( './utils/graphHeight.js' );

element._xDomain = require( './utils/xDomain.js' );

element._yDomain = require( './utils/yDomain.js' );


// EXPORTS //

module.exports = element;
