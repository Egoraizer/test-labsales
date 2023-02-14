  import Swiper, { Navigation, Pagination, Grid } from 'swiper';
  
  document.addEventListener('DOMContentLoaded', () => {
    
    const sw1 = new Swiper('.swiper', {
      modules: [Pagination, Grid],
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function(index, className) {
          return (
            '<div class="' + className + '">' + '</div>'
          )
        }
      },

      grid: {
        rows: 2,
      },
    })

    function init() {
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
      ]
        var infrastructureMap = new ymaps.Map("infrastructure-map", {
            center: [44.992370, 38.937148],
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




    ymaps.ready(init);
  })