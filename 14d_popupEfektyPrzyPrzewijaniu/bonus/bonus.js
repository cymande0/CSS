const $doc = $(document);
const $header = $("header");
const $main = $("main");

$doc.on("scroll", function(){
    const scrollValue = $doc.scrollTop();
    const sectionOffSet = $main.offset().top;
    const headerHeight = $header.outerHeight();
    
    console.log("Header height: " + headerHeight);
    console.log("Scroll post: " + scrollValue);
    console.log("Main offset od top: " + sectionOffSet);

    if(scrollValue < sectionOffSet) {
    console.log("zmiana");
    $header.css({
        "opacity" : 1 - scrollValue/headerHeight,
        "filter"  : "grayscale(" + 2 * scrollValue/headerHeight + ")"
    })
}
})