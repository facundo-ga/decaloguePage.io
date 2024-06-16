$(document).ready(function(){

    $.scrollify({
        section : "section",
        sectionName : "section-name",
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 1200,
        offset :50,
        scrollbars: false,
        standardScrollElements: ".normal-scroll",
        setHeights: false,
        overflowScroll: true,
        before:function() { scrollspy($.scrollify.current().attr('data-section-name'))},
        after:function(i) {
            $.scrollify.update();
            $('.navbar').animate({'opacity':1},500);
            const $body = $('body');
            let preIndex = parseInt($body.attr('data-pre-index'));
            let direction = i > preIndex ? 'down' : 'up';

            $body
                .attr('data-pre-index', i)
                .removeClass('up down')
                .addClass(direction);
        },
        afterResize:function() {},
        afterRender:function() {
            $('body').attr('data-pre-index', 0);
        }
    });

    function scrollspy(sectionName){
        var morphing1 = anime({
            targets: '.polymorph',
            points: [
                { value: '0,0 0,0 0,0 0,200' },
                { value: '0,0 100,0 50,200 0,200' },
                { value: '0,0 100,0 100,200 0,200' },
                { value: '100,0 100,0 100,200 50,200' },
                { value: '100,0 100,0 100,200 100,200' }
            ],
            easing: 'easeOutQuad',
            duration: 1600,
            loop: false
        });

        $('.navbar').animate({'opacity':0},500);
        $('.navbar-nav li').removeClass('active');
        $('.navbar-nav li').has('a[href="#'+sectionName+'"]').addClass('active');
    }   

    $('.navbar-nav li a, .link').on('click', function(e){
        $('.navbar-nav a').blur();
        if($(window).width()<768){
            $('#main-menu').collapse('toggle');
        }
        e.preventDefault();
        $('.navbar-nav li').removeClass('active');
        $(this).parents('li').addClass('active');
        var link = $(this).attr('href');
        $.scrollify.move(link);
    }); 

    $('.btn-next').on('click', function(e){
        $.scrollify.next();
    });

    $('.btn-prev').on('click', function(e){
        $.scrollify.previous();
    });

    var home_slides = $('#home-slides');
    home_slides.owlCarousel({
        loop: true,
        items: 1,
        animateOut: 'fadeOut',
        autoplay: 5000,
        nav: false,
        dots: false
    });

    function setAnimation (_elem, _InOut) {
        var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        _elem.each (function () {
            var $elem = $(this);
            var $animationType = 'animated ' + $elem.data( _InOut );
            $elem.addClass($animationType).one(animationEndEvent, function () {
                $elem.removeClass($animationType);
            });
        });
    }

    home_slides.on('change.owl.carousel', function(event) {
        var $currentItem = $('.owl-item', home_slides).eq(event.item.index);
        var $elemsToanim = $currentItem.find("[data-out]");
        setAnimation ($elemsToanim, 'out');
    });

    home_slides.on('changed.owl.carousel', function(event) {
        var $currentItem = $('.owl-item', home_slides).eq(event.item.index);
        var $elemsToanim = $currentItem.find("[data-in]");
        setAnimation ($elemsToanim, 'in');
    });

    window.sr = ScrollReveal();
    sr.reveal('.reveal', {origin:'bottom', delay:1500, duration:1000, distance: '100px', opacity:0, reset: true });

    var morphing1 = anime({
        targets: '.polymorph',
        points: [
            { value: '0,0 0,0 0,0 0,200' },
            { value: '0,0 100,0 50,200 0,200' },
            { value: '0,0 100,0 100,200 0,200' },
            { value: '100,0 100,0 100,200 50,200' },
            { value: '100,0 100,0 100,200 100,200' }
        ],
        easing: 'easeOutQuad',
        duration: 1600,
        loop: false
    });

});

$(window).load(function() {
    if($(window).width()<768){
        $('p > br').css({'display': 'none'});
    }
    if($(window).width()>768){
        $('p > br').css({'display': 'block'});
    }
    $.scrollify.update();
});

$(window).resize(function() {
    if($(window).width()<768){
        $('p > br').css({'display': 'none'});
    }
    if($(window).width()>768){
        $('p > br').css({'display': 'block'});
    }
});


function toggleVideoPlayerContainer() {
    var container = document.getElementById('videoPlayerContainer');
    container.style.display = 'block';
}


function toggleVideoPlayerContainer() {
    var videoContainer = document.getElementById('videoPlayerContainer');
    videoContainer.style.display = 'block';
  }
  

  function closeVideo() {
    var videoContainer = document.getElementById('videoPlayerContainer');
    videoContainer.style.display = 'none';
  
  
    var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }
  

  function showVideo(videoUrl) {
    var videoPlayer = document.getElementById('videoPlayer');
    var source = videoPlayer.querySelector('source');
  
 
    source.setAttribute('src', videoUrl);
    videoPlayer.load(); 
    videoPlayer.play(); 
  
    
    toggleVideoPlayerContainer();
  }
  