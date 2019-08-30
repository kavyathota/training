//import {classname/anything you want,..."} from "./filename";
import {IActivity} from './interfaceex';
export class Person{
    Name:string;
    protected Age:number;
    Gender:any =["Male","Female"];
    Aadhar:string;
    constructor(pName:string,pAge:number)
    {
        this.Name=pName;
        this.Age=pAge;
    }

    public Walk():string{return "walking...."};
    public Talk=()=>{
        return "Talking...";
    }
}
export class Employee extends Person{
    EmployeeId:number;
    Department:string;
    private _salary:number;
    static someNumber:number=201;
    constructor(pName:string,pAge:number,pDept:string,pSalary:number)
    {
        super(pName,pAge);
        this.Department=pDept;
        this._salary=pSalary;
        this.EmployeeId=this.generateEmpId();
    }
    private generateEmpId():number
    {
        //return Math.random()*1000+Employee.someNumber;
        return Employee.someNumber++;
    }
    GetEmployeeDetails()
    {
        return this;
    }
    GetAge()
    {
        return this.Age;
    }
    GetSalary()
    {
        return this._salary;
    }


}

var lokesh =new Employee("Lokesh J",22,"Engg",1000000);
console.log(lokesh.GetEmployeeDetails());
//console.log(lokesh.Age);  //error
console.log(lokesh.GetAge());
console.log(lokesh.Walk());
console.log(lokesh.Talk());