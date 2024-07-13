$(document).ready(function() {
    let currentIndex = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        const newTransform = -currentIndex * 100 + '%';
        $('.slider').css('transform', 'translateX(' + newTransform + ')');
    }

    $('#next').click(function() {
        showSlide(currentIndex + 1);
    });

    $('#prev').click(function() {
        showSlide(currentIndex - 1);
    });

    setInterval(function() {
        showSlide(currentIndex + 1);
    }, 3000);
});