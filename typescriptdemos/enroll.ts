function funwithrest(p1:string,extras?:string,ptitle:string="in function funwithrest",...members:string[]){
    console.log("p1 : "+p1);
    console.log("ptitle : "+ptitle);
    console.log("extras : "+extras );
    console.log("priniting members");
    for(let index=0;index<members.length;index++)
    console.log(members[index]);

}
funwithrest("kavya");
funwithrest("kavya","swarna")