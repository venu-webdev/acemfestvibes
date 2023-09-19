// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', e => {
//     cursor.setAttribute("style", "top: " + (e.clientY) + "px; left: " + (e.clientX) + "px; ")
// })

var $cursor = $('.cursor-dot');
function moveCursor(e) {
    $cursor.css({
        "top": `${e.clientY - 30}px`,
        "left": `${e.clientX - 30}px`,
    });
}
var $cursorf = $('.cursor-outline');
function moveCursorf(e) {
    $cursorf.css({
        "top": `${e.clientY - 30}px`,
        "left": `${e.clientX - 30}px`,
    });
}

$(window).on('mousemove', moveCursor);

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}