if (localStorage.getItem('modalOnStart') === null || localStorage.getItem('modalOnStart') === "true") {
    $('#exampleModal').modal();
}

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
    } else if (e.code === 'KeyA') {
        img.panBy({x: 100, y: 0})
    } else if (e.code === 'KeyD') {
        img.panBy({x: -100, y: 0})
    } else if (e.code === 'KeyW') {
        img.panBy({x: 0, y: 100})
    } else if (e.code === 'KeyS') {
        img.panBy({x: 0, y: -100})
    } else if (e.code === 'KeyM') {
        var toast = $('#toast');
        var body = $('.toast-body');
        switch(localStorage.getItem('modalOnStart')){
            case null:
            case 'true':
                localStorage.setItem('modalOnStart', false);
                body.text('Instructions will not show next visit');
                toast.toast('show');
                break;

            case 'false':
                localStorage.setItem('modalOnStart', true);
                body.text('Instructions will show next visit');
                toast.toast('show');
                break;
        }
    }
});