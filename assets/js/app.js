$(document).ready(function(){

    function is_touch_device() {
        var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
        var mq = function (query) {
            return window.matchMedia(query).matches;
        }
        if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
            return true;
        }
        // include the 'heartz' as a way to have a non matching MQ to help terminate the join
        var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
        return mq(query);
    }

    if (is_touch_device() === false) {
        $('.parallax-container').mousemove(function( event ){
            let xAxis = (event.pageX-($(this).outerWidth()/2))/($(this).outerWidth()/2);
            let yAxis =  (event.pageY-($(this).outerHeight()/2))/($(this).outerHeight()/2);
            $('.first-layer').css('--move-x', ''+xAxis+'');
            $('.first-layer').css('--move-y', ''+yAxis+'');
            
            $('.second-layer').css('--move-x', ''+xAxis+'');
            $('.second-layer').css('--move-y', ''+yAxis+'');
            
            $('.third-layer').css('--move-x', ''+xAxis+'');
            $('.third-layer').css('--move-y', ''+yAxis+'');
    
            $('canvas.background').css('--move-x', ''+xAxis+'');
            $('canvas.background').css('--move-y', ''+yAxis+'');
        });
    } 

    

    /* vars*/
    let $h = $('html');
    let $b = $('body');
    let $btn = $('.hero-wrap .btn');

    wow = new WOW({
        offset: 80
    })
    wow.init();

    // skill = new WOW({
    //     offset: 80,
    //     boxClass: 'active'
    // })
    // wow.init();


    /*functions */
    Particles.init({
        selector: '.background',
        maxParticles: 100,
        sizeVariations: 4,
        color: "#151618",
        // color: "#216bff",
        connectParticles: true,
        minDistance: 170,
        speed: .35,
        responsive: [
            {
              breakpoint: 768,
              options: {
                maxParticles: 100,
              }
            }, {
              breakpoint: 450,
              options: {
                maxParticles: 70,
              }
            },{
                breakpoint: 360,
                options: {
                    maxParticles: 40,
                }
            }
          ]
    });



    //tilt effect for project description
    const tilt = $('.project .desc').tilt({
        maxTilt:        20,
        perspective:    1000,
        easing:         "cubic-bezier(.03,.98,.52,.99)",
        scale:          1,
        speed:          300,
        reset:          true,
    });
    const tiltScreenshot = $('.project .screenshot').tilt({
        maxTilt:        10,
        perspective:    1000,
        scale:          1,
        speed:          100,
        reset:          true
    });




    $('.set-bg').each(function(){
		var imgSrc = $(this).find('img').attr('src');
		$(this).css({
			'background-image': 'url('+imgSrc+')',
			'background-position': 'center',
			'background-repeat': 'no-repeat',
			'background-size': 'cover'
		 });
    })




    function toggleMenu() {
        let $menuBtn = $('.menu-btn').children('span');
        let $header = $('header');
        var menuItems = $('header nav ul li');


        $menuBtn.on('click', function(){
                $header.toggleClass('toggled');
                $b.toggleClass('no-scroll');
                $h.toggleClass('no-scroll');
        });
        if ($(window).width() < 578) {
            menuItems.click(function() {
                $header.toggleClass('toggled');
                $b.toggleClass('no-scroll');
                $h.toggleClass('no-scroll');
            })
        }
    }
    


    // function heroScroll() {
    //     var $topElement = $('.scroll-here');
    //     $btn.on('click', function(){
    //         $('html, body').animate({
    //             scrollTop: $topElement.offset().top}, 1500);
    //     })
    // }

    function headerScroll() {
        $(window).scroll(function() {
            if ( $(window).scrollTop() > 40) {
                $('header').addClass('scrolled');
            } else {
                $('header').removeClass('scrolled');
            }
        })
        
    }


    // function fillSkillMeter(block, skillMeter, inView) {
    //     var timeout;
    //     if (inView === true) {
    //         block.find('.skill-meter span').each(function(i,el) {
    //             var $this = $(this);
    //             if($this.index() >= (skillMeter + 1)) {
    //                 return;
    //             } else {
    //                 timeout = setTimeout(function() {
    //                     $this.addClass('fill');
    //                 }, i*150);
    //             }
    //         });
    //     } else {
    //         clearTimeout(timeout);
    //         block.find('.skill-meter span').removeClass('fill');
    //         return;
    //     }
    // }


    // function skillsFillAnimation() {
    //     var skill = $('.skills-grid > div');
    //     var top_of_element;
    //     var bottom_of_element;
    //     var bottom_of_screen;
    //     var top_of_screen;
    //     var skillMeter;

    //     $(window).on('scroll', function() {
    //         skill.each(function () {
    //             top_of_element = $(this).offset().top;
    //             bottom_of_element = $(this).offset().top + $(this).outerHeight();
    //             bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    //             top_of_screen = $(window).scrollTop();
                
    //             if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
    //                 $(this).addClass('active');
    //                 skillMeter = $(this).find('.skill-meter .max').index();
    //                 fillSkillMeter($(this), skillMeter, true); 
    //             } else {
    //                 fillSkillMeter($(this), skillMeter, false); 
    //                 $(this).removeClass('active');
    //             }
    //         })
    //     })

    // }









    /* run the functions */
    toggleMenu();
    // heroScroll();
    headerScroll();
    // skillsFillAnimation();


})