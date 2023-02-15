  import Swiper, { Navigation, Pagination, Grid, Scrollbar, Thumbs } from 'swiper';
  
  document.addEventListener('DOMContentLoaded', () => {
    const swCards = new Swiper('#index-grid-cards', {
      modules: [Pagination, Grid],
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        bulletClass: 'index-advantages__bullet',
        bulletActiveClass: 'index-advantages__bullet_active',
        type: 'bullets',
        clickable: true,
        renderBullet: function(index, className) {
          return (
            '<span class="' + className + '">' + '<span class="circle"></span>' +  '</span>'
          )
        }
      },
      grid: {
        rows: 2,
      },
    })

    const swMapDescription = new Swiper('.swiper.index-infrastructure__map-description', {
      modules: [Scrollbar],
      slidesPerView: "auto",
      direction: 'vertical',
      spaceBetween: 15,
      cssMode: true,
      scrollbar: {
        el:'.swiper-scrollbar',
        draggable: true,
      }
    })

    const swResidentalThumbs = new Swiper('#index-residential-thumbs', {
      slidesPerView: "auto",
      spaceBetween: 15,
      direction: 'vertical',
      breakpoints: {
        1140: {
          direction: 'horizontal',
          spaceBetween: 40,
        }
      }
    })

    const swResidentalCards = new Swiper('#index-residential-cards', {
      modules: [Thumbs],
      initialSlide: 4,
      thumbs: {
        swiper: swResidentalThumbs,
        slideThumbActiveClass: 'active',
      }
    })

    ymaps.ready(init);
    
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
      ];

      const center = [44.992547, 38.930138];

      var infrastructureMap = new ymaps.Map("infrastructure-map", {
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
  })