// function printNames(){
//     document.write("Reis");
//     document.write("<br>");
//     setTimeout(function(){
//         document.write("jora");

//     },3000);
//     document.write("daors");
// }

// printNames();

var colors=['red', 'pink', 'blue', 'green'];
function changeBg(){
    document.querySelector('body').style.background=
    colors[Math.floor(Math.random()*colors.length)];



}
setInterval(changeBg, 1000);

var names=['jora', 'buna', 'reis','lum'];
function changeNames(){
    document.querySelector('p').innerHTML=
    names[Math.floor(Math.random()*names.length)];
}

setInterval(changeNames, 1000)

var slides=document.getElementsByClassName("slide");
var slideIndex=0;

function showSlide(i){
    slideIndex=(i+slides.length)%slides.length;
    for(let s of slides)s.style.display="none";
    slides[slideIndex].style.display="block"
}
showSlide(0);
setInterval(()=> showSlide(slideIndex+1),2000)