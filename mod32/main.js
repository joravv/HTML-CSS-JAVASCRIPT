var text="the most famous school is digital school";
var result=text.search("digital school");

document.getElementById('result1').innerHTML=result;

var text="the most famous school is digital school";
var result=text.replace(/digital school/, "ismail qemali");

document.getElementById('result2').innerHTML=result;

var text="lumidrinijorasufianireisi";
var regex= new RegExp ('jora');
document.getElementById('result3').innerHTML=regex.test(text);


var text= "My school is the best school of all school";
var regex= /school/g;
document.getElementById('result4').innerHTML=text.match(regex);

var text= "My school is the best school of all school";
var regex= /s/g;
document.getElementById('result5').innerHTML=text.match(regex);

var text= "My school is the best school of all school";
var regex= /[sol]/g;
document.getElementById('result6').innerHTML=text.match(regex);



var text= "My school is the top 10";
var regex= /[0-9]/g;
document.getElementById('result7').innerHTML=text.match(regex);