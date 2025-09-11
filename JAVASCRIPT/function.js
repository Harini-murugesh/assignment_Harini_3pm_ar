
// function
function greet(){
    console.log("hello")
}
greet();


//with parameter
function sla(name){
    console.log(name);
    
}
sla("harini")



//return type
function add(a,b){
return a+b;
}
let result = add(3,5)
console.log(result);



//function with variable
function note(){
    let message = "hello everyone";
    console.log(message);
    
}note()



//default 
function greett(name = "harini"){
    console.log("name  is ", name);
    
}greett()


//iife
(function(){
    console.log("something");
})();

