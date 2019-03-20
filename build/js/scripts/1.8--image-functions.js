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
  var RandomNumPath = 'http://www.mvbc.co.za/wp-content/themes/mvbc';
  // var RandomNumPath = 'http://staging.kdee.co.za/mvbc/wp-content/themes/mvbc';
  // var RandomNumPath = 'http://localhost/kdee/mvbc.co.za/3_root/wp-content/themes/mvbc';
  var RandomNum = Math.floor( Math.random() * totalImages);

  $(document).ready(function(){

    $('.o-home-header').attr("style","background-image:url('"+ RandomNumPath +"/dist/images/background/bg-main"+RandomNum+".jpg')");
    //$('.article').attr("style","background-image:url('../../../../../dist/images/background/bg-main"+RandomNum+".jpg')");

  });

  // A.2. END ---------------------------------------------

}
    

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++