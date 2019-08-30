function fooTraditional(x) {
    x = 10 + x;
    console.log(x);
}
var foointerim = function (x) {
    x = 9 + x;
    console.log(x);
};
var foo = function (x) {
    x = x + 5;
    console.log(x);
};
var dosomething = function (y) { return function (x) { return y * y * x; }; };
foo(100);
foointerim(100);
fooTraditional(100);
var result1 = dosomething(5);
console.log(result1(10));
