function show(name:string|string[])
{
    if(typeof name="string"){
        console.log(name)
    }
    else{
        var i;
        for(i=0;i<name.length;i++){
            console.log(name[i]);
        }
    }
}
show("chris");
console.log("printing names array...");
show(["mark","chris","satish","meera"]);