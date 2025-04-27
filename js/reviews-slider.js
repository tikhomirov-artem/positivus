const reviewsSlider = new Swiper(".reviews__slider", {
    grabCursor: true,
    autoplay: true,
    loop: true,
    slidesPerView: 2,
    navigation: {
        nextEl: '.reviews-next-button',
        prevEl: '.reviews-prev-button',
    },
    pagination: {
        el: ".pagination__list",
        clickable: true,
        bulletElement: "li",
        bulletClass: "pagination__item",
        bulletActiveClass: "pagination__item--active",
        renderBullet: function (index, className) {
            return `
            <li tabindex="1" class="${className}">
                <svg сlass="pagination__item-icon" width="14" height="14" viewBox="0 0 14 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                            fill="#BDBDBD" />
                </svg>
            </li>
            `;
        },
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