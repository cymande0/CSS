$('.interface').on("click", function(){
    // console.log(this);
    // console.log($(this).attr("class"));
    // console.log(this.className);
    if($(this).hasClass("orange")){
        console.log("Orange");
        // $('body').toggleClass("orange");
        // $('body').css("background-color", "orange");

        // $('body').css({
        //     "background-color" : "orange"
        // })

        $('body').attr("class", "orange");

        // $('p').css({
        //     "font-size" : "120px"
        // })
    }

    if($(this).hasClass("green")){
        $('body').attr("class", "green");
    }

    // if($(this).hasClass("increase")){
    //     $('p').css("font-size", "+=4");
    // }

    if($(this).hasClass("increase")){
        $('p').animate({
            "font-size": "+=2px"
        }, 2000)
    }

    if($(this).hasClass("move")){
        $('p').animate({
            "left": "+=10px",
            "letter-spacing": "+=2px"
        }, 2000)
    }

    // IF W JS
    // if(this.classList.contains("green")){
    //     console.log("green");
    // }
})