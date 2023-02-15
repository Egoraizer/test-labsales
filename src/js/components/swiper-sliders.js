import Swiper, { Pagination, Grid, Scrollbar, Thumbs } from 'swiper';

export default function swiperSliders() {
  const swCards = new Swiper('#index-grid-cards', {
    modules: [Pagination, Grid],
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      bulletClass: 'advantages__bullet',
      bulletActiveClass: 'advantages__bullet_active',
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
  
  const swMapDescription = new Swiper('#index-infrastructure-cards', {
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
}