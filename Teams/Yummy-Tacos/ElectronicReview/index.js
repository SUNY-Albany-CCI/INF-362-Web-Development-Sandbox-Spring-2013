//JavaScript
$(".nav li").hover(
					function(){
								$(this).children(".dropdown").slideDown();
							},
					function(){
								$(this).children(".dropdown").slideUp();
							}
				);
$(".dropdown").siblings("a").append("<small>&#9660;</small>");

//Image Slider
$(".slide").hide();
$(".active").show();
$(".slide").each(function(){
								$(".pager").append("<li>&#9679;</li>");
							}
				);
$(".pager li:first").addClass("on");
$(".pager li").click(function(){
									var num = $(this).index();
									$(".active").fadeOut().removeClass("active");
									$(".on").removeClass("on");
									$(".slide").eq(num).fadeIn().addClass("active");
									$(this).addClass("on");

								}
					);
$(".dark").ready(function(){
  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });
});// JavaScript Document