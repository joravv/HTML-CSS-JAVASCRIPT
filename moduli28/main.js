var button1= document.getElementById("button1")

button1.onclick=function(){
    alert("heloo")
}

var button2= document.getElementById("button2")
var button3= document.getElementById("button3")
var button4= document.getElementById("button4")
var button5= document.getElementById("button5")
button2.addEventListener('click', function(){
    alert("hi button2")
});

button3.onmouseover=function(){
    alert("Mouse Over");
}
   button4.onmouseleave=function(){
    alert("Mouse leave");
}
   
button5.onmousewheel=function(){
    alert("Mouse wheel");
}

var btn1= document.getElementById("btn1")
var btn2= document.getElementById("btn2")
var text1= document.getElementById("text1")

btn1.onclick=function(){
text1.style.color="pink"

}