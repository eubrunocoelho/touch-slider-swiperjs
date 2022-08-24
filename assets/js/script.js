new Swiper('.swiper-container', {
    loop: false,
    paginationClickable: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
        1200: {
            spaceBetween: 20
        },
        1024: {
            spaceBetween: 20
        },
        768: {
            spaceBetween: 20
        },
        480: {
            spaceBetween: 20
        },
        320: {
            spaceBetween: 10
        }
    }
});