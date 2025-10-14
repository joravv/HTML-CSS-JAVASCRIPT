var x=5;

if(x>2){
    console.log("the number is greater than 2")
}else{
    console.log("the number is less than 2")
}

var input=document.getElementById('input')
var button=document.getElementById('btn')
var h1=document.getElementById('text')

button.onclick=function(){
    text.innerHTML=input.value ;
}

var input1=document.querySelector('#input1')
var input2=document.querySelector('#input2')
var sum=document.querySelector('#btn1')
var text=document.querySelector('#result')

sum.onclick=function(){
    text.innerHTML= parseInt(input1.value)+  parseInt(input2.value);
}

sum.onclick=function(){
    if(result>10){
        kushti.innerHTML="numri eshte mei madh sev 10"
    }else if(result<10)
         kushti.innerHTML="numri eshte mei vogel sev 10"
}else{
kushti.innerHTML="numri eshte mei barabart sev 10"

}
