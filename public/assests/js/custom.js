$(function() {
    // HEADER -- CLICK TO OPEN SEARCH BAR
    $('.header i').on('click', function() {
        $('.header_search').toggleClass('header_search-active');
    })

    // HEADER -- CLICK TO SHOW MOBILE NAV
    $('.header_show-nav').on('click', function() {
        $('.header_nav-mob').toggleClass('header_nav-mob-active');
    })
})