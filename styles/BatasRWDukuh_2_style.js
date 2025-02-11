var size = 0;
var placement = 'point';
function categories_BatasRWDukuh_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'RW 01: REJOSARI':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(151,117,43,1.0)', lineDash: [9.12,4.56], lineCap: 'square', lineJoin: 'bevel', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RW 02: KARANGANYAR':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(151,117,43,1.0)', lineDash: [9.12,4.56], lineCap: 'square', lineJoin: 'bevel', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RW 03: GANDHIL':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(151,117,43,1.0)', lineDash: [9.12,4.56], lineCap: 'square', lineJoin: 'bevel', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RW 04: GESING':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(151,117,43,1.0)', lineDash: [9.12,4.56], lineCap: 'square', lineJoin: 'bevel', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RW 05: SANTREN':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(151,117,43,1.0)', lineDash: [9.12,4.56], lineCap: 'square', lineJoin: 'bevel', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RW 06: LEBO WETAN':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(151,117,43,1.0)', lineDash: [9.12,4.56], lineCap: 'square', lineJoin: 'bevel', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RW 07: LEBO TENGAH':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(151,117,43,1.0)', lineDash: [9.12,4.56], lineCap: 'square', lineJoin: 'bevel', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RW 08: LEBO KULON':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(151,117,43,1.0)', lineDash: [9.12,4.56], lineCap: 'square', lineJoin: 'bevel', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RW 09: LEBO ROWOSARI':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(151,117,43,1.0)', lineDash: [9.12,4.56], lineCap: 'square', lineJoin: 'bevel', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_BatasRWDukuh_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("Dukuh");
    var labelFont = "19.5px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Dukuh") !== null) {
        labelText = String(feature.get("Dukuh"));
    }
    
    var style = categories_BatasRWDukuh_2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
