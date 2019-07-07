
//   scrollify   //
(function() {
  $.scrollify({
		section : "section",
		sectionName : "section-name",
		easing: "easeOutExpo",
		scrollSpeed: 3000,
	});
  
  $('li').click(function() {
    $.scrollify.move('#' + $(this).attr('id'));
  });
})();

//   accordion-menu   //
$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;
    
    var dropdownlink = this.el.find('.dropdownlink');
    dropdownlink.on('click',
                    { el: this.el, multiple: this.multiple },
                    this.dropdown);
  };
  
  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        //this is the ul.submenuItems
        $next = $this.next();
    
    $next.slideToggle();
    $this.parent().toggleClass('open');
    
    if(!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
    }
  }
  
  var accordion = new Accordion($('.accordion-menu'), false);
})

$(".submenuItems a").hover(function() {
    // マウスが乗った時の処理
    $(this).css({
      "background-color": "#cccccc",
    });
  }, function() {
    // マウスが外れた時の処理
    $(this).css({
      "background-color": "#fff",
    });
});


//   slick   //
$(function(){
  function sliderSetting(){
 
  var width = $(window).width();
 
  if(width >= 1025){
    $('.image').not('.slick-initialized').slick({
        autoplay: true,
        fade: true,
        dots: true,
        arrows: true
    });
} else {
    $('.image.slick-initialized').slick('unslick');
    }
}
 
    sliderSetting();
 
    $(window).resize( function() {
        sliderSetting();
    });
});

  
