const swiper = new Swiper(".swiper", {
    spaceBetween: 200,
    grabCursor: true,
    autoplay: true,
    loop: true,
    slidesPerView: 5,
    breakpoints: {
        350: {
            slidesPerView: 2,
            spaceBetween: 100
        },
        430: {
            slidesPerView: 3,
            spaceBetween: 60
        },
        630: {
            slidesPerView: 4,
            spaceBetween: 100
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 100
        },
        1024: {
            spaceBetween: 200
        }
    }
})