$(".slide").slideUp();$(".seemore").on("click",function(){$(".slide").slideDown();$(".seemore").hide();$(".firstform").css("width","70%");$(".first-div-container").css("left","13%");$(".first-div-container").css("padding-bottom","3%")});function openNav(){document.getElementById("mySidenav").style.width="35%"}
function closeNav(){document.getElementById("mySidenav").style.width="0"}
function myFunction(x){if(x.matches){$(".container.popular-projects-container").removeClass(["container","popular-projects-container"]).addClass("container-fluid");$(".container.goto-container").removeClass(["container","goto-container"]).addClass("container-fluid");$(".container.everyday-container").removeClass(["container","everyday-container"]).addClass("container-fluid");$(".zip-text").slideUp();$(".taskrabbit-locations").on("click",function(){$(".zip-text").slideToggle()});$(".globe-img").slideUp();$(".taskrabbit-locations").on("click",function(){$(".globe-img").slideToggle()});$(".container.getmore-container").removeClass(["container","getmore-container"]).addClass("container-fluid");$(".word-hide").slideUp();$(".word-p").on("click",function(){$(".word-hide").slideDown();$(".word-p").hide()});$(".articles-div").slideUp();$(".seemore-articles").on("click",function(){$(".articles-div").slideDown();$(".seemore-articles").hide()})}}
var x=window.matchMedia("(max-width: 1024px)")
myFunction(x)
x.addListener(myFunction)
