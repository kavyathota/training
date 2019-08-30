var greeter = /** @class */ (function () {
    function greeter(pName, pContact, pPlace) {
        if (pName === void 0) { pName = ""; }
        var pExtras1 = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            pExtras1[_i - 3] = arguments[_i];
        }
        this._PrivateVar = "ooo im private";
        this.Name = pName;
        this.Contact = pContact;
        this.Place = pPlace;
        this.Extras = pExtras1;
    }
    return greeter;
}());
var obj1 = new greeter("roshini", ["hyatt gachibowli"]);
console.log(obj1.Name);
console.log(obj1.Contact);
console.log(obj1.Place);
console.log(obj1.Extras);
