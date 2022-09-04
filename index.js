$("#nav-toggle").on("click", function () {
    this.classList.toggle("active");
});

$("#nav-toggle").click(function () {
    $("nav ul").toggle();
});
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)