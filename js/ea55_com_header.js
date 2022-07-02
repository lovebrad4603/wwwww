$(window).scroll(function() {
    let scrollTop = $(this).scrollTop();
    if (scrollTop > 50) {
        $(`#header`).addClass(`.ea55_com_header`);
    } else {
        $(`.ea55_com_header`).removeClass(`.ea55_com_header`);
    }
})