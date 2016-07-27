/**
 * @exports WmscLayer
 */
define([
        '../error/ArgumentError',
        '../layer/WmsLayer'
    ],
    function (ArgumentError,
              WmsLayer
    ) {
        "use strict";


        var WmscLayer = function (config, timeString) {
            WmsLayer.call(this, config, timeString);
        };

        WmscLayer.prototype = Object.create(WmsLayer.prototype);

        WmscLayer.prototype.doRender = function (dc) {
            WmsLayer.prototype.doRender.call(this,dc);
        };

        WmscLayer.prototype.formLayerConfiguration = function (WmsLayerCapabilities) {
            WmsLayer.prototype.formLayerConfiguration.call(this,WmsLayerCapabilities);
        };

        return WmscLayer;

    });