$("div#bg").sequencer({
    count: 250,
    path: "img/about/bg",
    ext: "jpg"
}, function() {

});

   function scrolltolink(id){
        if(id == '#work'){
            $('html, body').animate({
                scrollTop: $(id).offset().top + 10
            }, 1500);   
        }
        else{
            $('html, body').animate({
                scrollTop: $(id).offset().top - 40
            }, 1500);
        }
        $('.lazy').Lazy();
      
   }

   function closemenu(){
      $('.trigger').click();
   }

    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(document).scrollTop() > 100) {
                $('body').addClass('scrolled');
            }
            else {
                $('body').removeClass('scrolled');
            }
        });
    });
    ///////////////////Burger
    	
        $('document').ready(function () {
              isClosed = true;
        });
        function burgerTime() {
         var trigger = $("#hamburger");
            if (isClosed == true) {
                $("#nav-overlay").css("top", "0");
                $("#nav-overlay").css("z-index", "99");
                trigger.removeClass('is-closed');
                trigger.addClass('is-open');
                $('body').addClass('disable-scroll');
                $('section').css('opacity', '0');
                isClosed = false;
                
                $("#nav-overlay nav").css("opacity", "1");
            } else {
                trigger.removeClass('is-open');
                trigger.addClass('is-closed');
                    $('body').removeClass('disable-scroll');
                    $("#nav-overlay nav").css("opacity", "0");
                    setTimeout(() => {
                        $('section').css('opacity', '1');
                        $("#nav-overlay").css("top", "-100vh");
                        $("#nav-overlay").css("z-index", "-99");	    
                    }, 150);
                isClosed = true;
            }
          }
    	
    ///////////////////End Burger
    ///////////////////FADE IN UP	
    
       $(document).ready(function() {
        hideObjects();
        checkObjectsVisibility();
       });
       
       $(window).scroll( function() {
        hideObjects();
         checkObjectsVisibility();
       });
       
       function hideObjects() {
       $('.fadeInUp-scroll').css({
           'opacity': 0,
           'transform': 'translateY(400px)'
       });
       }
       
       function checkObjectsVisibility() {
       $('.fadeInUp-scroll').each( function(i) {
           var objectTop = $(this).offset().top;
           var windowBottom = $(window).scrollTop() + $(window).outerHeight();
       
           if( windowBottom > objectTop - 300){
               $(this).addClass('visible');
           } else {
               $(this).removeClass('visible');
           }
       });
       }
           
           
    
    ///////////////////EN FADE IN UP	

    
       $(document).ready(function() {
           // set rotation of flash
           TweenMax.set("#newversion", {rotation: 15});
       
           $('body').css('visibility','visible');
       
           // hide content until after title animation
           $('#content-wrapper').css('display','none');
           
           // lettering.js to split up letters for animation
           $('#title-line1').lettering();
           $('#title-line2').lettering();
           $('#title-line3').lettering();
           
           // TimelineLite for title animation, then start up superscrollorama when complete
           (new TimelineLite({onComplete:initScrollAnimations}))
               .from( $('#title-line1 span'), .4, {delay: 1, css:{right:'1000px'}, ease:Back.easeOut})
               .from( $('#title-line2'), .4, {css:{top:'1000px',opacity:'0'}, ease:Expo.easeOut})
               .append([
                   TweenMax.from( $('#title-line3 .char1'), .25+Math.random(), {css:{top: '-200px', right:'1000px'}, ease:Elastic.easeOut}),
                   TweenMax.from( $('#title-line3 .char2'), .25+Math.random(), {css:{top: '300px', right:'1000px'}, ease:Elastic.easeOut}),
                   TweenMax.from( $('#title-line3 .char3'), .25+Math.random(), {css:{top: '-400px', right:'1000px'}, ease:Elastic.easeOut}),
                   TweenMax.from( $('#title-line3 .char4'), .25+Math.random(), {css:{top: '-200px', left:'1000px'}, ease:Elastic.easeOut}),
                   TweenMax.from( $('#title-line3 .char5'), .25+Math.random(), {css:{top: '200px', left:'1000px'}, ease:Elastic.easeOut})
               ])
               .from("#newversion", .4, {scale: 5, autoAlpha: 0, ease: Elastic.easeOut})
               .to( $('#title-info'), .5, {css:{opacity:.99, 'margin-top':0}, delay:-1, ease:Quad.easeOut})
               .to( $('#download'), .25, {autoAlpha:1});
           
           function initScrollAnimations() {
               $('#content-wrapper').css('display','block');
               var controller = $.superscrollorama();
           
               // title tweens
               $('.title-line span').each(function() {
                   controller.addTween(10, TweenMax.to(this, .5, {css:{top: Math.random()*-200-600, left: (Math.random()*1000)-500, rotation:Math.random()*720-360, 'font-size': Math.random()*300+150}, ease:Quad.easeOut}),200);
               });
               controller.addTween(10, TweenMax.to($('#title-line1'), .75, {css:{top: 600}, ease:Quad.easeOut}),200);
               controller.addTween(10, TweenMax.to($('#title-line2'), .75, {css:{top: 200}, ease:Quad.easeOut}),200);
               controller.addTween(10, TweenMax.to($('#title-line3'), .75, {css:{top: -100}, ease:Quad.easeOut},200));
       
               // showcase tweens
               controller.addTween('#showcase h1', TweenMax.from( $('#showcase h1'), .75, {css:{letterSpacing:20,opacity:0}, ease:Quad.easeOut}));
               controller.addTween('#showcase p', TweenMax.from( $('#showcase p'), 1, {css:{opacity:0}, ease:Quad.easeOut}));
               $('#showcase .gallery figure').css('position','relative').each(function() {
                   controller.addTween('#showcase .gallery', TweenMax.from( $(this), 1, {delay:Math.random()*.2,css:{left:Math.random()*200-100,top:Math.random()*200-100,opacity:0}, ease:Back.easeOut}));
               });
       
               // hire tweens
               $('#hire h1').lettering().find('span').css('position','relative').each(function() {
                   controller.addTween('#hire h1', TweenMax.from( $(this), .25, {delay:Math.random()*.2,css:{left:Math.random()*1200-600,top:Math.random()*600-300,opacity:0}, ease:Expo.easeOut}),200);
               });
               controller.addTween('#hire img', TweenMax.from( $('#hire img'), .5, {css:{opacity:0}}));
               
               // hire tweens
               $('#hire2 h2').lettering().find('span').css('position','relative').each(function() {
                   controller.addTween('#hire2 h2', TweenMax.from( $(this), .25, {delay:Math.random()*.2,css:{left:Math.random()*1200-600,top:Math.random()*600-300,opacity:0}, ease:Expo.easeOut}),200);
               });
               controller.addTween('#hire img', TweenMax.from( $('#hire img'), .5, {css:{opacity:0}}));
               
               // individual element tween examples
               controller.addTween('#fade-it', TweenMax.from( $('#fade-it'), .5, {css:{opacity: 0}}));
               controller.addTween('#fade-it-orange', TweenMax.from( $('#fade-it-orange'), .5, {css:{opacity: 0}}));
               controller.addTween('#fade-it-yellow', TweenMax.from( $('#fade-it-yellow'), .5, {css:{opacity: 0}}));
               controller.addTween('#fade-it-pink', TweenMax.from( $('#fade-it-pink'), .5, {css:{opacity: 0}}));
               controller.addTween('#fly-it', TweenMax.from( $('#fly-it'), .25, {css:{right:'1000px'}, ease:Quad.easeInOut}));
               controller.addTween('#spin-it', TweenMax.from( $('#spin-it'), .25, {css:{opacity:0, rotation: 720}, ease:Quad.easeOut}));
               controller.addTween('#scale-it', TweenMax.fromTo( $('#scale-it'), .25, {css:{opacity:0, fontSize:'20px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'240px'}, ease:Quad.easeInOut}));
               controller.addTween('#smush-it', TweenMax.fromTo( $('#smush-it'), .25, {css:{opacity:0, 'letter-spacing':'30px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, 'letter-spacing':'-10px'}, ease:Quad.easeInOut}), 0, 100); // 100 px offset for better timing
               
               // set duration, in pixels scrolled, for pinned element
               var pinDur = 4000;
               // create animation timeline for pinned element
               var pinAnimations = new TimelineLite();
               pinAnimations
                   .append(TweenMax.from($('#pin-frame-pin h2'), .5, {css:{marginTop:0}, ease: Quad.easeInOut}))
                   .append([
                       TweenMax.to($('#pin-frame-slide'), 1, {css:{marginLeft:0}}),
                       TweenMax.to($('#pin-frame-pin'), 1, {css:{marginLeft:'100%'}})
                   ], .5)
                   .append([
                       TweenMax.to($('#pin-frame-wipe'), .5, {css:{top:0}}),
                       TweenMax.from($('#pin-frame-wipe h2'), .5, {css:{marginTop:'-600px'}})
                   ], .5)
                   .append(TweenMax.from($('#pin-frame-bounce'), 5, {css:{marginTop:'-100%'}, ease:Bounce.easeOut}), .5)
                   .append(TweenMax.from($('#pin-frame-color'), .25, {css:{opacity:0}}), .5)
                   .append([
                       TweenMax.to($('#pin-frame-color'), .25, {css:{backgroundColor:'blue'}}),
                       TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'orange'}})
                   ])
                   .append([
                       TweenMax.to($('#pin-frame-color'), .25, {css:{backgroundColor:'green'}}),
                       TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'red'}})
                   ])
                   .append([
                       TweenMax.to($('#pin-frame-color'), .25, {css:{backgroundColor:'yellow'}}),
                       TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'purple'}})
                   ])
                   .append([
                       TweenMax.to($('#pin-frame-color'), .25, {css:{backgroundColor:'orange'}}),
                       TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'blue'}})
                   ])
                   .append([
                       TweenMax.to($('#pin-frame-color'), .25, {css:{backgroundColor:'red'}}),
                       TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'green'}})
                   ])
                   .append([
                       TweenMax.to($('#pin-frame-color'), .25, {css:{backgroundColor:'#222438'}}),
                       TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'#FFB000'}})
                   ])
                   .append(TweenMax.to($('#pin-frame-unpin'), .5, {css:{top:'100px'}}));
               
               // pin element, use onPin and onUnpin to adjust the height of the element
               controller.pin($('#examples-pin'), pinDur, {
                   anim:pinAnimations, 
                   onPin: function() {
                       $('#examples-pin').css('height','100%');
                   }, 
                   onUnpin: function() {
                       $('#examples-pin').css('height','600px');
                   }
               });
               controller.pin($('#examples-2'), 3000, {
                   anim: (new TimelineLite())
                       .append(
                           TweenMax.fromTo($('#fling-it'), 2, 
                               {css:{left:-1000, top: 500, rotation: -360}, immediateRender:true}, 
                               {css:{left:2000, top: -600, rotation: 360}})
                       )
                       .append(
                           TweenMax.fromTo($('#move-it'), .75, 
                               {css:{left: -200, top: 800}, immediateRender:true}, 
                               {css:{top: -200}}),
                               -1.5 // offset for better timing
                       )
                       .append(
                           TweenMax.to($('#move-it'), .5, 
                               {css:{left: 200}})
                       )
                       .append(
                           TweenMax.to($('#move-it'), .5, 
                               {css:{top: 0}})
                       )
                       .append(
                           TweenMax.to($('#move-it'), .5, 
                               {css:{left: 0}})
                       )
               })
       
               // parallax example, setting duration ties animation to scroll position
               // you can target a scroll position instead of an element (whose position can change)
               controller.addTween(
                   '#examples-parallax',
                   (new TimelineLite())
                       .append([
                           TweenMax.fromTo($('#parallax-it-left'), 1, 
                               {css:{top: 200}, immediateRender:true}, 
                               {css:{top: -400}}),
                           TweenMax.fromTo($('#parallax-it-right'), 1, 
                               {css:{top: 500}, immediateRender:true}, 
                               {css:{top: -950}}),
                           TweenMax.fromTo($('#parallax-it-left2'), 1, 
                               {css:{top: 300}, immediateRender:true}, 
                               {css:{top: -1450}}),
                           TweenMax.fromTo($('#parallax-it-center'), 1, 
                               {css:{top: 300}, immediateRender:true}, 
                               {css:{top: -800}}),
                           TweenMax.fromTo($('#parallax-it-left3'), 1, 
                               {css:{top: 400}, immediateRender:true}, 
                               {css:{top: -1900}})
                       ]),
                   1000 // scroll duration of tween
               );
       
               $('#bring-it').lettering();
               controller.addTween(
                   '#bring-it',
                   (new TimelineLite())
                       .append([
                           TweenMax.from($('#bring-it .char1'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it .char2'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it .char3'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it .char4'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it .char5'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it .char6'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it .char7'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it .char8'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut})
                       ])
                       ,
                   1200,
                   -100 // offset for better timing
               );
               
               $('#bring-it2').lettering();
               controller.addTween(
                   '#bring-it2',
                   (new TimelineLite())
                       .append([
                           TweenMax.from($('#bring-it2 .char1'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char2'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char3'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char4'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char5'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char6'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char7'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char8'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),

                               TweenMax.from($('#bring-it2 .char9'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char10'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char11'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char12'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char13'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char14'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char15'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char16'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),

                               TweenMax.from($('#bring-it2 .char17'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char18'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char19'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char20'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char21'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char22'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char23'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char24'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),

                               TweenMax.from($('#bring-it2 .char25'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char26'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char27'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char28'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char29'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char30'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char31'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char32'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),

                               TweenMax.from($('#bring-it2 .char33'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char34'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char35'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char36'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char37'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char38'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char39'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char40'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),

                               TweenMax.from($('#bring-it2 .char41'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char42'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char43'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char44'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char45'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char46'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char47'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char48'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),

                               TweenMax.from($('#bring-it2 .char49'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char50'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char51'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char52'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char53'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char54'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char55'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char56'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),

                               TweenMax.from($('#bring-it2 .char57'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char58'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char59'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char60'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char61'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char62'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char63'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char64'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),

                               TweenMax.from($('#bring-it2 .char65'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char66'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char67'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char68'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char69'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char70'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char71'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char72'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),

                               TweenMax.from($('#bring-it2 .char73'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it2 .char74'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut})
                               
                       ])
                       ,
                   1200,
                   -100 // offset for better timing
               );
               
               $('#bring-it3').lettering();
               controller.addTween(
                   '#bring-it3',
                   (new TimelineLite())
                       .append([
                           TweenMax.from($('#bring-it3 .char1'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it3 .char2'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it3 .char3'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it3 .char4'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it3 .char5'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it3 .char6'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it3 .char7'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it3 .char8'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it3 .char9'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                               TweenMax.from($('#bring-it3 .char10'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                               TweenMax.from($('#bring-it3 .char11'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                               TweenMax.from($('#bring-it3 .char12'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                               TweenMax.from($('#bring-it3 .char13'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                               TweenMax.from($('#bring-it3 .char14'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                               TweenMax.from($('#bring-it3 .char15'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                               TweenMax.from($('#bring-it3 .char16'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                               TweenMax.from($('#bring-it3 .char17'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                               TweenMax.from($('#bring-it3 .char18'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                               TweenMax.from($('#bring-it3 .char19'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut})
                           
                       ])
                       ,
                   1200,
                   -100 // offset for better timing
               );
               
               $('#bring-it4').lettering();
               controller.addTween(
                   '#bring-it4',
                   (new TimelineLite())
                       .append([
                           TweenMax.from($('#bring-it4 .char1'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it4 .char2'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it4 .char3'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it4 .char4'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it4 .char5'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it4 .char6'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it4 .char7'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it4 .char8'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it4 .char9'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it4 .char10'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it4 .char11'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut})
                       ])
                       ,
                   1200,
                   -100 // offset for better timing
               );
               
               $('#bring-it5').lettering();
               controller.addTween(
                   '#bring-it5',
                   (new TimelineLite())
                       .append([
                           TweenMax.from($('#bring-it5 .char1'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char2'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char3'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char4'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char5'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char6'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char7'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char8'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                               
                           TweenMax.from($('#bring-it5 .char9'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char10'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char11'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char12'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char13'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char14'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char15'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char16'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                               
                           TweenMax.from($('#bring-it5 .char17'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char18'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char19'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char20'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char21'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char22'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char23'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char24'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char25'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char26'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char27'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char28'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char29'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char30'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char31'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char32'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                               
                           TweenMax.from($('#bring-it5 .char33'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char34'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char35'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char36'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char37'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char38'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char39'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char40'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
       
                           TweenMax.from($('#bring-it5 .char41'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char42'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char43'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char44'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char45'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char46'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it5 .char47'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut})
                       ])
                       ,
                   1200,
                   -100 // offset for better timing
               );
               
               $('#bring-it6').lettering();
               controller.addTween(
                   '#bring-it6',
                   (new TimelineLite())
                       .append([
                           TweenMax.from($('#bring-it6 .char1'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char2'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char3'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char4'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char5'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char6'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char7'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char8'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                               
                           TweenMax.from($('#bring-it6 .char9'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char10'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char11'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char12'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char13'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char14'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char15'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char16'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                               
                           TweenMax.from($('#bring-it6 .char17'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char18'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char19'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char20'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char21'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char22'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char23'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char24'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                               
                           TweenMax.from($('#bring-it6 .char25'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char26'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char27'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char28'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char29'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char30'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char31'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char32'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
       
                                                           
                           TweenMax.from($('#bring-it6 .char33'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char34'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char35'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char36'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char37'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char38'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char39'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char40'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
       
                           TweenMax.from($('#bring-it6 .char41'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char42'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char43'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char44'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char45'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char46'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it6 .char47'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut})
                       ])
                       ,
                   1200,
                   -100 // offset for better timing
               );
               
               $('#bring-it7').lettering();
               controller.addTween(
                   '#bring-it7',
                   (new TimelineLite())
                       .append([
                           TweenMax.from($('#bring-it7 .char1'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char2'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char3'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char4'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char5'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char6'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char7'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char8'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char9'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char11'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char12'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char13'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char14'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char15'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char16'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char17'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char18'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char19'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char20'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char21'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char22'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char23'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char24'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char25'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char26'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char27'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char28'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char29'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char30'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char31'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char32'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char33'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char34'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char35'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char36'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char37'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char38'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char39'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char40'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char41'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char42'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char43'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char44'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char45'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char46'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char47'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char48'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char49'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char50'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char51'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char52'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char53'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char54'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char55'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char56'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char57'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char58'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char59'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char60'), 1.1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char61'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char62'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char63'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char64'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char65'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char66'), .7, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char67'), .9, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char68'), 1.2, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char69'), .6, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char70'), .8, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
                           TweenMax.from($('#bring-it7 .char71'), 1, 
                               {css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut})
                       ])
                       ,
                   1200,
                   -100 // offset for better timing
               );
           }
       });
    
    
       function goTop(){
           $('html, body').animate({ scrollTop: 0 }, 'slow', function () {
             });
       }
       $(window).scroll(function(){
           $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
       });
       
       /*win.scroll(function(){
       scrollPosition = win.scrollTop();
       scrollRatio = 1 - scrollPosition / 300;
       $(".top").css("opacity", scrollRatio);
       */
       
       
       /*$(window).scroll(function(){
           var scrollVar = $(window).scrollTop();
           $('.top').css("opacity", 1 - scrollVar/300);
       })*/
       
       $(window).scroll(function() {
       
       // selectors
       var $window = $(window),
           $contservices = $('.contservices'),
           $panel = $('.checkpointcolor');
       
       // Change 33% earlier than scroll position so colour is there when you arrive.
       var scroll = $window.scrollTop() + ($window.height() / 6);
       
       $panel.each(function () {
           var $this = $(this);
           
           // if position is within range of this panel.
           // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
           // Remember we set the scroll to 33% earlier in scroll var.
           if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
               
                // Remove all classes on body with color-
                $contservices.removeClass(function (index, css) {
                    return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
                });
                
                // Add class of currently active div
                $contservices.addClass('color-' + $(this).data('color'));
           }
       });    
       
       }).scroll();
       
       function isOnScreen(elem) {
           // if the element doesn't exist, abort
           if( elem.length == 0 ) {
               return;
           }
           var $window = jQuery(window)
           var viewport_top = $window.scrollTop()
           var viewport_height = $window.height()
           var viewport_bottom = viewport_top + viewport_height
           var $elem = jQuery(elem)
           var top = $elem.offset().top
           var height = $elem.height()
           var bottom = top + height
       
           return (top/3 >= viewport_top && top < viewport_bottom) ||
           (bottom > viewport_top && bottom <= viewport_bottom) ||
           (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
       }
       
       jQuery( document ).ready( function() {
           $("video").prop("volume", 0.5);
           window.addEventListener('scroll', function(e) {
            
               if( isOnScreen( jQuery( '#colors' ) ) ) {
                       $(".bullets").css("opacity", "1");
                       $(".bullets").css("z-index", "2");
                       $(".contservices").css("opacity", "1");
                       $(".services.black").css("color", "#f2f2f2");
                       $("section#work *").css("color", "#f2f2f2");
                       $(".us-section p.black").css("color", "#f2f2f2");
                       $(".us-section h1.black").css("color", "#f2f2f2");
                       $(".us-section h2.black").css("color", "#f2f2f2");
                       $(".marquee-section p.black").css("color", "#f2f2f2");
                       $(".marquee-section h1.black").css("color", "#f2f2f2");
                       $(".marquee-section h1.grey").css("color", "#757575"); 
                       $(".page-section h2.black").css("color", "#f2f2f2");
				       $(".page-section ul.black").css("color", "#f2f2f2");
				       $(".page-section h3.black").css("color", "#f2f2f2");
				       $(".page-section hr.black").css("color", "#f2f2f2");
               }
               else{
                   $(".bullets").css("opacity", "0");
                   $(".bullets").css("z-index", "-2");
                   $(".contservices").css("opacity", "0");
                   $(".services.black").css("color", "#000");
                   $("section#work *").css("color", "#f2f2f2");
                   $(".us-section p.black").css("color", "#000");
                   $(".us-section h1.black").css("color", "#000");
                   $(".us-section h2.black").css("color", "#000");
                   $(".marquee-section p.black").css("color", "#000");
                   $(".marquee-section h1.black").css("color", "#000");
                   $(".marquee-section h1.grey").css("color", "#b2b1ac");
                   $(".page-section h2.black").css("color", "#000");
				   $(".page-section ul.black").css("color", "#000");
				   $(".page-section h3.black").css("color", "#000");
				   $(".page-section hr.black").css("color", "#000");
                  
               }	
           });
       });
       
       function openVid(path){
           var videoFile = "video/"+path+".mp4";
           var $video = $('.videopop'),
            videoSrc = $('source', $video).attr('src', videoFile);
       
           setTimeout(() => {
               $("#popVideo").fadeIn();
               $video[0].load();
               $video[0].play();
           }, 250);
       }
       
       function closePopVideo(){
           $(".videopop")[0].pause();
           $("#popVideo").fadeOut();
           
       }
         
       $(function() {
            $('.lazy').Lazy();
        });

        $(window).scroll(function(){
            $('.lazy').Lazy();
        });

// dark mode

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Color Toggle Function - Revisar si sirve para el NOISE o el DARK MODE
const toggleButton = document.getElementById('toggle');
if (toggleButton) {
  toggleButton.addEventListener('click', function () {
    const rootStyles = getComputedStyle(document.documentElement);
    const currentWhite = rootStyles.getPropertyValue('--color--white').trim();
    // Elements to update
    const splineVideo = document.getElementById('spline-video');
    const splineVideoWithClass = document.getElementById('spline-video2');
    const noiseElement = document.querySelector('.noise'); // Select .noise element
    if (currentWhite === '#ebeae6') {
      // Dark mode
      document.documentElement.style.setProperty('--color--white', '#0A0A0A');
      document.documentElement.style.setProperty('--color--black', '#ebeae6');
      // Animations
      gsap.to('#toggle-switch', { right: '0', left: '0%', x: '0%', duration: 0.25, ease: 'power1.out' }); // Move from right to left    
      gsap.to('.spline-scene canvas', { filter: 'invert(1)', duration: 0.25, ease: 'power1.out' });
      // Update spline-video styles for dark mode
      if (splineVideo) {
        splineVideo.style.mixBlendMode = 'difference';  // Set mix-blend-mode to 'difference'
      }
      if (splineVideoWithClass) {
        splineVideoWithClass.style.filter = 'invert(1)';  // Invert the video
      }
      // Update .noise styles for dark mode
      if (noiseElement) {
        noiseElement.style.mixBlendMode = 'difference';  // Set mix-blend-mode to 'difference' for noise in dark mode
      }
    } else {
      // Light mode
      document.documentElement.style.setProperty('--color--white', '#ebeae6');
      document.documentElement.style.setProperty('--color--black', '#0A0A0A');
      // Animations
      gsap.to('#toggle-switch', { right: '0', left: '100%', x: '-100%', duration: 0.25, ease: 'power1.out' }); // Move from left to right
      gsap.to('.spline-scene canvas', { filter: 'invert(0)', duration: 0.25, ease: 'power1.out' });
      // Update spline-video styles for light mode
      if (splineVideo) {
        splineVideo.style.mixBlendMode = 'darken';  // Set mix-blend-mode to 'darken'
      }
      if (splineVideoWithClass) {
        splineVideoWithClass.style.filter = 'invert(0)';  // Remove invert
      }
      // Update .noise styles for light mode
      if (noiseElement) {
        noiseElement.style.mixBlendMode = 'darken';  // Set mix-blend-mode to 'darken' for noise in light mode
      }
    }
  });
}

// efecto blur texto 

         /**
 * letteranimation.js
 * https://www.cssanimatio.io
 * Created and maintained by: Pavel
 * Find me at: https://www.linkedin.com/in/yesiamrocks/
 * Email: hello@cssanimation.io
 * Github: https://github.com/yesiamrocks/cssanimation.io
 * Title: CSS Animation Library for Developers and Ninjas
 * Copyright (c) 2017 Pavel
 * License: cssanimattion is licensed under the MIT license
 **/

         window.onload = function() {
            animateSequence();
            animateRandom();
        };
        
        function animateSequence() {
            var a = document.getElementsByClassName('sequence');
            for (var i = 0; i < a.length; i++) {
                var $this = a[i];
                var letter = $this.innerHTML;
                letter = letter.trim();
                var str = '';
                var delay = 100;
                for (l = 0; l < letter.length; l++) {
                    if (letter[l] != ' ') {
                        str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
                        delay += 150;
                    } else
                        str += letter[l];
                }
                $this.innerHTML = str;
            }
        }
        
        function animateRandom() {
            var a = document.getElementsByClassName('random');
            for (var i = 0; i < a.length; i++) {
                var $this = a[i];
                var letter = $this.innerHTML;
                letter = letter.trim();
                var delay = 70;
                var delayArray = new Array;
                var randLetter = new Array;
                for (j = 0; j < letter.length; j++) {
                    while (1) {
                        var random = getRandomInt(0, (letter.length - 1));
                        if (delayArray.indexOf(random) == -1)
                            break;
                    }
                    delayArray[j] = random;
                }
                for (l = 0; l < delayArray.length; l++) {
                    var str = '';
                    var index = delayArray[l];
                    if (letter[index] != ' ') {
                        str = '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[index] + '</span>';
                        randLetter[index] = str;
                    } else
                        randLetter[index] = letter[index];
                    delay += 80;
                }
                randLetter = randLetter.join("");
                $this.innerHTML = randLetter;
            }
        }
        
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }