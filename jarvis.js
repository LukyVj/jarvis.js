/*
== Jarvis.JS  ========
component of Jarvis.js
Version : 1.0; 
Date : 07/15/13
Author : @LukyVj

Under M.I.T License : 
dev.web-gate.fr/MIT
=======================
*/
$(document).ready(function(){
$('body').attr('id','on-jarvis').addClass('stocked');
        $("head").append("<link>");
        var css = $("head").children(":last");
        css.attr({
          rel:  "stylesheet",
          type: "text/css",
          href: "jarvisjs-1.0/jarvis.css"
        });
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