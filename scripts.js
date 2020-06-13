document.getElementById('image').addEventListener('load', function () {
    // Will get called after embed element was loaded
    svgPanZoom('#image', {
        zoomEnabled: true,
        controlIconsEnabled: true,
        mouseWheelZoomEnabled: true,
        zoomScaleSensitivity: 0.5,
        minZoom: 0.2,
        maxZoom: 50,
        preventMouseEventsDefault: true
    });
});

document.addEventListener("keypress", function (e) {
    var img = svgPanZoom('#image');
    if (e.code === 'Space') {
        if (img.isControlIconsEnabled()) {
            img.disableControlIcons();
        } else {
            img.enableControlIcons();
        }
    } else if (e.code === 'KeyR') {
        img.resetZoom();
        img.center();
    }
});