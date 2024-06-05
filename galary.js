
$(".galary__slide").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
});


const photoGalary = document.querySelector(".brands__photo")
const galary = document.querySelector(".galary")

photoGalary.addEventListener("click", function(){
    galary.style.display = "block"
})