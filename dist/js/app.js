// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

jQuery(document).ready(function($) {
/*
 * JavaScript Templates Runtime
 * https://github.com/blueimp/JavaScript-Templates
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global define */

;(function ($) {
    'use strict'
    var tmpl = function (id, data) {
        var f = tmpl.cache[id]
        return data ? f(data, tmpl) : function (data) {
            return f(data, tmpl)
        }
    }
    tmpl.cache = {}
    tmpl.encReg = /[<>&"'\x00]/g // eslint-disable-line no-control-regex
    tmpl.encMap = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&#39;'
    }
    tmpl.encode = function (s) {
        return (s == null ? '' : '' + s).replace(
            tmpl.encReg,
            function (c) {
                return tmpl.encMap[c] || ''
            }
        )
    }
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return tmpl
        })
    } else if (typeof module === 'object' && module.exports) {
        module.exports = tmpl
    } else {
        $.tmpl = tmpl
    }
}(this))
// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// ====== INDEX  ======================================================================================================
// ==
// == A. MOBILE CLASS
// ==
// ====== INDEX  ======================================================================================================

// A. SHOW/HIDE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
// A.1. MOBILE CLASS --------------------------------------------------------------------------------------------------
    
  var deviceAgent = navigator.userAgent.toLowerCase();

  $('html').addClass('desktop');
  
  if (deviceAgent.match(/(iphone|ipod|ipad)/)) {
    $('html').removeClass('desktop');
    $('html').addClass('ios');
    $('html').addClass('mobile');
  }
  
  if (deviceAgent.match(/android/)) {
    $('html').removeClass('desktop');
    $('html').addClass('android');
    $('html').addClass('mobile');
  }
  
  if (deviceAgent.match(/blackberry/)) {
    $('html').removeClass('desktop');
    $('html').addClass('blackberry');
    $('html').addClass('mobile');
  }
  
  if (deviceAgent.match(/(symbianos|^sonyericsson|^nokia|^samsung|^lg)/)) {
    $('html').removeClass('desktop');
    $('html').addClass('mobile');
  }
    
// A.1. END -----------------------------------------------------------------------------------------------------------
  
// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// A. GLOBAL FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
// A.1. FUNCTIONS -----------------------------------------

initToggleFunctions();
initSwiperFunctions();
initScrollFunctions();
initAltTextFunctions();

// A.1. END -----------------------------------------------

// A.2. SCREEN SIZE CHECK ---------------------------------
    
	var screen = $( window ).width();
	console.log('I am a device, and my width is: ' + screen);
    
// A.2. END -----------------------------------------------

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// A. TOGGLE FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function initToggleFunctions() {

  // A.1. GENERAL SHOW ------------------------------------

  $('.showhide').click(function(e) {

    var target = $(this).attr('href');

    if ($(target).hasClass('hidden') ) {

      $(target).removeClass('hidden');
      $('.showhide').addClass('close');

    } else {

      $(target).addClass('hidden');
      $('.showhide').removeClass('close');

    }

    e.preventDefault();

  });

  // A.1. END ---------------------------------------------

  // A.2. TOGGLE DIV --------------------------------------

  var currentContent = '';
  $('.toggle-div').on('click', function(){
    currentContent = $(this).attr('name');
    if($('#'+currentContent).hasClass('on')){
      $('#'+currentContent).removeClass('on');
      $('body').removeClass('modal-open');
    }else{
      hideAllContent();
      showCurrentContent(currentContent);
    }
  });

  function hideAllContent(){
    $('.toggle-content').removeClass('on');
    $('body').removeClass('modal-open');
  };

  function showCurrentContent(currentContentDiv){
    $('#'+currentContentDiv).addClass('on');
    $('body').addClass('modal-open');
  };

  // A.2. END ---------------------------------------------

  // A.3. MOBILE SHOWHIDE ---------------------------------

  (function($){
    if($('html').hasClass('mobile')){
      $('.a-config').on('click', function(){
        //e.preventDefault();
        if($('.a-config').hasClass('active')){
          $('.a-config').removeClass('active');
          $('body').removeClass('fixed');
        } else {
          $('.a-config').addClass('active');
          $('body').addClass('fixed');
        }
      });
    }
  })(jQuery)

  // A.3. END ---------------------------------------------

  // A.4. BURGER MENU -------------------------------------

  $('.reveal').click(function(e) {

    var target = $(this).attr('href');

    if ($(target).hasClass('hidden') ) {

      $(target).removeClass('hidden');
      $('.reveal').addClass('close');

    } else {

      $(target).addClass('hidden');
      $('.reveal').removeClass('close');

    }

    e.preventDefault();

  });

  $('.o-hamburger').click(function(e) {

    var target = $(this).attr('href');

    if ($(target).hasClass('hidden') ) {

      $(target).removeClass('hidden');
      $('.c-hamburger').addClass('is-active');
      $('body').addClass('fixed');

    } else {

      $(target).addClass('hidden');
      $('.c-hamburger').removeClass('is-active');
      $('body').removeClass('fixed');

    }

    e.preventDefault();

  });

  // A.4. END ---------------------------------------------

  // A.5. MODAL POPUPS ------------------------------------

  var modalContent = '';
  $('.modal-open').on('click', function(){
    modalContent = $(this).attr('name');
    if($('#'+modalContent).hasClass('on')){
      $('#'+modalContent).removeClass('on');
      $('body').removeClass('modal-open');
    }else{
      hideAllContent();
      showmodalContent(modalContent);
    }
  });

  function hideAllContent(){
    $('.o-modal-full').removeClass('on');
    $('body').removeClass('modal-open');
  };

  function showmodalContent(modalContentDiv){
    $('#'+modalContentDiv).addClass('on');
    $('body').addClass('modal-open');
  };

  // A.5. END ---------------------------------------------

}

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// A. CAROUSEL FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function initSwiperFunctions() {

  // A.1. HOME CAROUSEL -----------------------------------

  var mySwiper = new Swiper ('.home-carousel', {

    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })

  // A.1. END ---------------------------------------------

}
    

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// A. SHOW/HIDE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// A.9. AUTO HEIGHT ---------------------------------------------------------------------------------------------------

/*
    http://codepen.io/micahgodbolt/pen/FgqLc

    Thanks to CSS Tricks for pointing out this bit of jQuery
    http://css-tricks.com/equal-height-blocks-in-rows/
    It's been modified into a function called at page load and then each time the page is resized.
    One large modification was to remove the set height before each new calculation.
*/

var equalheight;
equalheight = function (container) {
  var currentTallest = 0,
      currentRowStart = 0,
      topPosition = 0,
      currentDiv = 0,
      rowDivs = [],
      $el;
  $(container).each(function () {

    $el = $(this);
    $($el).height('auto');
    topPosition = $el.position().top;

    if (currentRowStart != topPosition) {
      for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
      }
      rowDivs.length = 0; // empty the array
      currentRowStart = topPosition;
      currentTallest = $el.height();
      rowDivs.push($el);
    } else {
      rowDivs.push($el);
      currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }
    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
      rowDivs[currentDiv].height(currentTallest);
    }
  });
};

$(document).ready(function() {

  equalheight('.features-block .reason-card .m-card-title');
  equalheight('.features-block .reason-card .m-card-body');

  if($(window).width() >= 767) {

    equalheight('.reasons-block .reason-card .m-card-title');
    equalheight('.reasons-block .reason-card .m-card-body');

  }

});

$(window).resize(function() {

  equalheight('.features-block .reason-card .m-card-title');
  equalheight('.features-block .reason-card .m-card-body');

  if($(window).width() >= 767) {

    equalheight('.reasons-block .reason-card .m-card-title');
    equalheight('.reasons-block .reason-card .m-card-body');

  }

});

// A.9. END -----------------------------------------------------------------------------------------------------------

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// A. SCROLL FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function initScrollFunctions() {

  // A.1. ON SCROLL STICKY --------------------------------

  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};

  // Get the header
  var header = document.getElementById("o-header");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  // A.1. END ---------------------------------------------

}
    

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// A. SCROLL FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function initAltTextFunctions() {

  // A.1. INSTA IMAGE MANIPULATE --------------------------

  $(".instagram-pics img").each(function() {
    $(this).after('<div class="m-image-text"><p class="alt">' + $(this).attr('alt') + '</p></div>');
    $(".o-insta-feed .clear a").addClass("a-btn btn-blue");
  })

  // A.1. END ---------------------------------------------

  // A.2. RANDOM BACKGROUND -------------------------------

  var totalImages = 13;
//  var RandomNumPath = 'http://www.mvbc.co.za/wp-content/themes/mvbc';
   var RandomNumPath = 'http://staging.kdee.co.za/ymo/wp-content/themes/ymo';
  // var RandomNumPath = 'http://localhost/kdee/mvbc.co.za/3_root/wp-content/themes/mvbc';
  var RandomNum = Math.floor( Math.random() * totalImages);

  $(document).ready(function(){

    $('.o-home-header').attr("style","background-image:url('"+ RandomNumPath +"/dist/images/background/bg-main"+RandomNum+".jpg')");
    //$('.article').attr("style","background-image:url('../../../../../dist/images/background/bg-main"+RandomNum+".jpg')");

  });

  // A.2. END ---------------------------------------------

}
    

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FILE END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

});