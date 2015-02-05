(function($) {

  var kicss = {
    init: function() {

      $("a[href=#]").click(function(e) {
        e.preventDefault();
      });

//    $(".drawer").drawer();
    }

//  jsLoad: function() {
//  }

  };

  jQuery(document).ready(function() {
    kicss.init();
  });

// jQuery(window).load(function(){
//   kicss.jsLoad();
// });

  window.kicss = window.kicss || {};
  window.kicss = kicss;

})(jQuery);
