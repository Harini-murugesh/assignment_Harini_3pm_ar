//for loop
for(let i=0; i<=5;i++){
    console.log(i);
    
}
console.log("----------");


//while loop
let a=1;
while(a<=6){
    console.log(a);
    a++
}
console.log("----------");

//do while
let b=6;
do{
    console.log(b);
    b++
}while(b<=5)
console.log("---------");

//for....of loop
const numbers = [10, 20, 30];

for (let value of numbers) {
  console.log(value);
}


//for....in loop
const person = {
     name: "Ganesh",
      age: 22, 
      city: "Pune" 
    };

for (let key in person) {
  console.log(key, ":", person[key]);
}