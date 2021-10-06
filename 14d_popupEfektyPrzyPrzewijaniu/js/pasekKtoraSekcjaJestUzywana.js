// JQuery:

// function changeText() {
//     
//     console.log("Scroll Postion: " + scrollPosition);

//     const section1Height = $(".sekcja1").height();
//     const section2Height = $(".sekcja2").height();
//     const section3Height = $(".sekcja3").height();
//     const section4Height = $(".sekcja4").height();
//     const distanceFromTheBeginningOfSection1 = $(".sekcja1").offset().top;
//     const distanceFromTheBeginningOfSection2 = $(".sekcja2").offset().top;
//     const distanceFromTheBeginningOfSection3 = $(".sekcja3").offset().top;
//     const distanceFromTheBeginningOfSection4 = $(".sekcja4").offset().top;

//     console.log("1 " + distanceFromTheBeginningOfSection1);
//     console.log("2 " + distanceFromTheBeginningOfSection2);
//     console.log("3 " + distanceFromTheBeginningOfSection3);
//     console.log("4 " + distanceFromTheBeginningOfSection4);


//     if(scrollPosition < section1Height) {
//         $("div.info").text("Sekcja 1");
//     }
//     else if (scrollPosition < section2Height + distanceFromTheBeginningOfSection2) {
//         $("div.info").text("Sekcja 2");
//     }
//     else if (scrollPosition < section3Height + distanceFromTheBeginningOfSection3) {
//         $("div.info").text("Sekcja 3");
//     }
//     else (scrollPosition < section4Height + distanceFromTheBeginningOfSection4) {
//         $("div.info").text("Sekcja 4");
//     }
// }
// $(document).on("scroll", changeText);

function changeText() {
    const txt = document.querySelector(".info");
    const scrollPosition = window.scrollY;
    const section1Height = document.querySelector(".sekcja1").clientHeight;
    const section2Height = document.querySelector(".sekcja2").clientHeight;
    const section3Height = document.querySelector(".sekcja3").clientHeight;
    const section4Height = document.querySelector(".sekcja4").clientHeight;
    const distanceFromTheBeginningOfSection1 = document.querySelector(".sekcja1").offsetTop;
    const distanceFromTheBeginningOfSection2 = document.querySelector(".sekcja2").offsetTop;
    const distanceFromTheBeginningOfSection3 = document.querySelector(".sekcja3").offsetTop;
    const distanceFromTheBeginningOfSection4 = document.querySelector(".sekcja4").offsetTop;

    if(scrollPosition < section1Height) {
        txt.textContent = "Sekcja 1";
    }
    else if (scrollPosition < section2Height + distanceFromTheBeginningOfSection2) {
        txt.textContent = "Sekcja 2";
    }
    else if (scrollPosition < section3Height + distanceFromTheBeginningOfSection3) {
        txt.textContent = "Sekcja 3";
    }
    else {
        txt.textContent = "Sekcja 4";
    }
}

window.addEventListener("scroll", changeText);





























