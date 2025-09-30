var Jora = () => alert("hello jora");
Jora()

function twoseconds(number1){
    return number1*60

}
console.log(twoseconds(2))

var car={name:"Audi",
         color:"black",
         year:2018,
          startEngin: function(){
    alert("Vroom!")
}
 }
 
 var school={name:"digital school",
         students:1200,
         year:2016
 }
 
 console.log(car.name)
 console.log(school.year)

 car.startEngin()

 var computer=new Object();
 computer.name="macbook";
 computer.cpu="inter core i7";
 computer.ram="16GB";
 computer.gpu="GeForce 4080";

 computer.type=function(){
    returnthis.name+this.cpu+this.ram+this.gpu;

 };
 console.log(computer.type())