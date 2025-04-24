const reviewsSlider = new Swiper(".reviews__slider", {
    grabCursor: true,
    autoplay: true,
    loop: true,
    slidesPerView: 2,
    navigation: {
        nextEl: '.reviews-next-button',
        prevEl: '.reviews-prev-button',
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30
        }
    }
})