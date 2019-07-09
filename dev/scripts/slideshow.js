// Slide Show Scripts

var slideIndex=0;
var $slides = $('.slides');
var $dot = $('.dot');
var timer = null;
var start = true;
var startPrev = true;
var startNext = false;
var fired = false;

showSlides();

$('.dot').click(function(){
    if($(this).index()+1 === slideIndex){
        return;
    }else{
        clearTimeout(timer);
        slideIndex = $(this).index();
        dot(slideIndex);
    }
});

function showSlides(){
    $('.dot').css('background-color', 'white');
    startPrev = true;

    if (startNext === true){
        slideIndex++;
        startNext = false;
    }

    if(slideIndex === $slides.length){
        slideIndex = 0;
    }  
    
    if (start === true){
        $slides.hide();
        $slides.eq(slideIndex).show();
        start = false;
    }else{
        $slides.eq(slideIndex).fadeIn();
        $slides.eq(slideIndex-1).fadeOut();
    }

    $('.dot').eq(slideIndex).css('background-color', 'rgba(66, 155, 214, 1)');
    slideIndex++;   
  
    timer = setTimeout(showSlides, 5000);
};

function dot(index){
    $slides.fadeOut();
    $slides.eq(index).fadeIn();
    $('.dot').css('background-color', 'white');
    $('.dot').eq(index).css('background-color', 'rgba(66, 155, 214, 1)');
    showSlides();
}