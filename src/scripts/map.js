(function() {
    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("contacts", {
            center: [55.748672, 37.608998],
            controls: [],
            suppressMapOpenBlock: false,
            suppressObsoleteBrowserNotifier: false,
            zoom: 14
        });

        loftIco = new ymaps.Placemark([55.748672, 37.608998], {
            balloonContent: 'Магазин "Все для сёрфинга"'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'images/img/marker.svg',
            iconImageSize: [58, 73],
            iconImageOffset: [-58, -73]
        });
        myMap.geoObjects.add(loftIco);
    }
})()