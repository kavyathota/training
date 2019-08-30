function funwithrest(p1, ptitle, extras) {
    if (ptitle === void 0) { ptitle = "in function funwithrest"; }
    var members = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        members[_i - 3] = arguments[_i];
    }
    console.log("p1 : " + p1);
    console.log("ptitle : " + ptitle);
    console.log("extras : " + extras);
    console.log("priniting members");
    for (var index = 0; index < members.length; index++)
        console.log(members[index]);
}
funwithrest("kavya");
funwithrest("kavya", "ajay", ["sushma"], "lahari", "swarna");
