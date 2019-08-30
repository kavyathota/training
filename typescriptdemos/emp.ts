class studentx
{
    studentid:number=1234;
    aname:string="kavya";
 salary:number=50000;
     skills:string[]=["c","java","c++","javascript"];
 idproof:string="jshejjfeffr";


 enroll(coursename:string):string {
   return "enrolling courses";
}
 trainerallocation()
    {
     console.log("trainer namewho is allocated");
}
 submitIDproofs(idproof:string):string
    {
        return "done if the id proofs are submitted";
    }
dosomething=(salary:number)=>(tax: number)=>salary-tax;
}
var obj:studentx=new studentx;
console.log(obj.dosomething(1000)(500));