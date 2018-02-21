// function toggleReadMoreReadLess(event) {
//     event.preventDefault();
//     $(".readmore").toggle();
//     $("#show-this-on-click").slideToggle();
//     $(".readless").toggleClass("hide");
// }

function handleReadMoreClick(event) {
    event.preventDefault();
    $(".readmore").hide();
    $("#show-this-on-click").slideDown();
    $(".readless").show();
}

function handleReadLessClick(event) {
    event.preventDefault();
    $(".readmore").show();
    $("#show-this-on-click").slideUp();
    $(".readless").hide();
}


function handleLearnMoreClick(event) {
    event.preventDefault();
    $(".learnmore").hide();
    $("#learnmoretext").slideDown();

}
function readyFn(jQuery) {
    // $(".readmore a").click(toggleReadMoreReadLess);
    // $(".readless a").click(toggleReadMoreReadLess);
    $(".readmore a").click(handleReadMoreClick);
    $(".readless a").click(handleReadLessClick);
    $(".learnmore").click(handleLearnMoreClick);

}

$(document).ready(readyFn);
// $(readyFn);
