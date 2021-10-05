$(document).on("scroll", function(){
    $("div.info").text("Scroll: " + $(window).scrollTop());
    if($(window).scrollTop() > 200) {
        $("div.info").addClass("active");
    } else {
        $("div.info").removeClass("active");
    }
})