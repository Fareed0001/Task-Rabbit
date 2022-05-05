// for background image butten texts
$(".slide").slideUp();
// initial slided up comments

// to slide them down
$(".seemore").on("click", function() {
  $(".slide").slideDown();
  $(".seemore").hide();
  $(".firstform").css("width", "70%");
  $(".first-div-container").css("left", "13%");
  $(".first-div-container").css("padding-bottom", "3%");
});

$(".seemore").on("click", function() {
  var rodwave = new Audio("Downloaded images/Rod Wave - Street Runner.mp3");
  rodwave.play();
});

// MEDIA QUERY
// SIDE-NAV CODES
function openNav() {
  document.getElementById("mySidenav").style.width = "35%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// JQUERY MEDIA QUERY
function myFunction(x) {
  if (x.matches) { // If media query matches
    // POPULAR PROJECTS
    $(".container.popular-projects-container").removeClass(["container", "popular-projects-container"]).addClass("container-fluid");
    // to remove more than one class, use an array brackets

    // GOTO team
    $(".container.goto-container").removeClass(["container", "goto-container"]).addClass("container-fluid");

    // EVERYDAY
    $(".container.everyday-container").removeClass(["container", "everyday-container"]).addClass("container-fluid");

    // ZIPCODE
    $(".zip-text").slideUp();
    $(".taskrabbit-locations").on("click", function() {
      // to toggle between sliding up and down
      $(".zip-text").slideToggle();
    });

    $(".globe-img").slideUp();
    $(".taskrabbit-locations").on("click", function() {
      // to toggle between sliding up and down
      $(".globe-img").slideToggle();
    });

    // GETMORE
    $(".container.getmore-container").removeClass(["container", "getmore-container"]).addClass("container-fluid");

    // WORD
    $(".word-hide").slideUp();
    $(".word-p").on("click", function() {
      // to toggle between sliding up and down
      $(".word-hide").slideDown();
      $(".word-p").hide();
    });

    // GET INSPIRED
    $(".articles-div").slideUp();
    $(".seemore-articles").on("click", function() {
      // to toggle between sliding up and down
      $(".articles-div").slideDown();
      $(".seemore-articles").hide();
    });
  }
}

var x = window.matchMedia("(max-width: 1024px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
