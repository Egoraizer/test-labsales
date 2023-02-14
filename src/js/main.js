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
  })