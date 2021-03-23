function enter() {
    var selectedLi = $(this);
    var menu = selectedLi.find('.menu');
    var other = $('.show');
    other.removeClass('show');
    menu.addClass('show');
}

function out() {
    $('main').click(function () {
        $('div.menu').removeClass('show');
    })
}

function show() {
    $('.dropdownSide>ul>li').hover(enter, out)
}

function init() {
    show();
}

$(document).ready(init);
