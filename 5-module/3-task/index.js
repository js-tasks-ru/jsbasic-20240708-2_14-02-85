function initCarousel() {
    let carousel = document.querySelector('.carousel');
    let item = document.querySelector('.carousel__inner')
    let carouselItems = document.querySelectorAll('.carousel__slide');
    let btnRight = document.querySelector('.carousel__arrow_right');
    let btnLeft = document.querySelector('.carousel__arrow_left');
    let slideIndex = 0;
    let totalItems = carouselItems.length;
    
    btnLeft.style.display = 'none';
    const elemWidth = carouselItems[0].offsetWidth;
        carousel.addEventListener('click',(event) => {
        if (event.target.closest('.carousel__arrow_right')) {
          slideIndex++;
          let offset = -elemWidth * slideIndex;
          item.style.transform = `translateX(${offset}px)`;
        if (slideIndex === totalItems - 1) {
          btnRight.style.display = 'none';
        }
        if (slideIndex > 0) {
          btnLeft.style.display = '';
        }

      }
      if (event.target.closest('.carousel__arrow_left')) {
        slideIndex--;
        let offset = -elemWidth * slideIndex;
        item.style.transform = `translateX(${offset}px)`;
        if (slideIndex === 0) {
          btnLeft.style.display = 'none';
        }
        if (slideIndex < totalItems - 1) {
          btnRight.style.display = '';
        }
      }
    });
}