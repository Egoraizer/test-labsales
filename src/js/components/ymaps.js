export default function ymapsInit() {
    ymaps.ready(init);

    function init() {
      const center = [44.992547, 38.930138];

      const placemarks = [
        { coords: [44.996224, 38.924706], imageHref: './images/map/pool-purple.svg' },
        { coords: [44.994451, 38.938221], imageHref: './images/map/bank-white.svg' },
        { coords: [44.993226, 38.931186], imageHref: './images/map/bank-purple.svg' },
        { coords: [44.991641, 38.931126], imageHref: './images/map/shop-green.svg' },
        { coords: [44.991304, 38.926625], imageHref: './images/map/geo-blue.svg' },
        { coords: [44.990135, 38.933278], imageHref: './images/map/hospital-pink.svg' },
        { coords: [44.989239, 38.925444], imageHref: './images/map/shop-white.svg' },
        { coords: [44.988370, 38.930362], imageHref: './images/map/kindergarten-blue.svg' },
        { coords: [44.988276, 38.924818], imageHref: './images/map/petrol-purple.svg' },
        { coords: [44.988337, 38.932676], imageHref: './images/map/coffee-orange.svg' },
        { coords: [44.985890, 38.927059], imageHref: './images/map/hospital-white.svg' },
      ];

      var infrastructureMap = new ymaps.Map("index-infrastructure-map", {
          center: center,
          zoom: 15,
          controls: []
      }, {
        suppressMapOpenBlock: true,
      })

      placemarks.forEach((mark) => {
        infrastructureMap.geoObjects.add(new ymaps.Placemark(mark.coords, {}, {
          iconLayout: 'default#image',
          iconImageSize: [70, 70],
          iconImageHref: mark.imageHref,
          iconImageOffset: [-30, -30]
        }))
      })

      infrastructureMap.geoObjects.add(new ymaps.Placemark([44.992056, 38.925886], {}, {
        iconLayout: 'default#image',
        iconImageSize: [324, 54],
        iconImageHref: './images/map/our-office.svg',
        iconImageOffset: [-125, -20]
      }))
    }
}