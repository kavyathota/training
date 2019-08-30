function fooTraditional(x:number){
    x=10+x;
    console.log(x);
}
var foointerim=function(x:number){
    x=9+x;
    console.log(x);
}
var foo=(x:number)=>{
    x=x+5;
    console.log(x);
}
//var dosomething=(y:number)=>(x)=>y*y*x; explained below how to this works; 
function dosomethingtrad(y:number):any
{
    return function dosomethingtrad():any;

}
foo(100);
foointerim(100);
fooTraditional(100);
//var result1=dosomething(5);
var result1=dosomething(5)(10);
//console.log(result1(10));
console.log(result1);