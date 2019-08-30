"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(pName, pAge) {
        this.Gender = ["Male", "Female"];
        this.Talk = function () {
            return "Talking...";
        };
        this.Name = pName;
        this.Age = pAge;
    }
    Person.prototype.Walk = function () { return "walking...."; };
    ;
    return Person;
}());
exports.Person = Person;
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(pName, pAge, pDept, pSalary) {
        var _this = _super.call(this, pName, pAge) || this;
        _this.Department = pDept;
        _this._salary = pSalary;
        _this.EmployeeId = _this.generateEmpId();
        return _this;
    }
    Employee.prototype.generateEmpId = function () {
        //return Math.random()*1000+Employee.someNumber;
        return Employee.someNumber++;
    };
    Employee.prototype.GetEmployeeDetails = function () {
        return this;
    };
    Employee.prototype.GetAge = function () {
        return this.Age;
    };
    Employee.prototype.GetSalary = function () {
        return this._salary;
    };
    Employee.someNumber = 201;
    return Employee;
}(Person));
exports.Employee = Employee;
var lokesh = new Employee("Lokesh J", 22, "Engg", 1000000);
console.log(lokesh.GetEmployeeDetails());
//console.log(lokesh.Age);  //error
console.log(lokesh.GetAge());
console.log(lokesh.Walk());
console.log(lokesh.Talk());
