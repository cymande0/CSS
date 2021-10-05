// Pierwszy sposób

// $(".me").on("click", function(){
//     $("body, html").animate({
//         scrollTop: $(".s1").offset().top
//     })
// })

// $(".portolio").on("click", function(){
//     $("body, html").animate({
//         scrollTop: $(".s2").offset().top
//     })
// })

// $(".offer").on("click", function(){
//     $("body, html").animate({
//         scrollTop: $(".s3").offset().top
//     })
// })

// $(".contact").on("click", function(){
//     $("body, html").animate({
//         scrollTop: $(".s4").offset().top
//     })
// })

// Szybsza opcja
// $("nav a").on("click", function() {
//    const goToSection = "#" + $(this).attr("class");
//    $("body, html").animate({
//       scrollTop: $(goToSection).offset().top
//    })
// })

$("nav a").on("click", function() {
   const goToSection = "[data-section=" + $(this).attr("class") + "]";
   $("body, html").animate({
      scrollTop: $(goToSection).offset().top
   })
})

// $('[data-section="me"')

