//Фон изображения занимает всё пространство экрана. Класс header получает значения высоты окна от объекта window

$(document).ready(function() {
    $('.header').height($(window).height());
});