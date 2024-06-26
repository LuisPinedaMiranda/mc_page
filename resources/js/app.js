import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import.meta.glob(['../images/**'])

import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
Swiper.use([Navigation, Pagination])

var swiper = new Swiper('.slide-content', {
  slidesPerView: 3,
  spaceBetween: 25,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlanck: true,
  breakpoints: {
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
    769: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      // max-width: 392px
      max: 392,
    },
    394: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      // min-width: 393px
      min: 393,
    },
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
