/*
== Jarvis.JS  ========
component of Jarvis.js
Version : 1.2; 
Date : 07/17/13
Author : @LukyVj

Under M.I.T License : 
dev.web-gate.fr/MIT
=======================
*/
$(document).ready(function(){
$('body').attr('id','on-jarvis').addClass('stocked');
		$("#on-jarvis *,#on-jarvis * *, #on-jarvis * > *, #on-jarvis * * > *").addClass('jarvis');
		$('.jarvis').find('p').addClass('inner-jarvis');
        $("head").append("<link>");     
        $("body").append("<div id='loader'></div>");
        $("body").append("<div id='st-screen'></div>");
        $("#loader").addClass('load');
        var css = $("head").children(":last");
        css.attr({
          rel:  "stylesheet",
          type: "text/css",
          href: "jarvisjs-1.2/jarvis.css"
        });
         setTimeout(function(){
	          $("#st-screen").fadeOut();
        },300)
        setTimeout(function(){
	           $("#on-jarvis").removeClass('stocked');
        },500)
  var numJarvisParts = $('.jarvis').length;
$("#on-jarvis").each(function() {
         $('.jarvis').addClass(function (index) {
             return 'jv-' + (index + 1);
         }); 
     });
     
  
});