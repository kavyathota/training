var studentx = /** @class */ (function () {
    function studentx() {
        this.studentid = 1234;
        this.aname = "kavya";
        this.salary = 50000;
        this.skills = ["c", "java", "c++", "javascript"];
        this.idproof = "jshejjfeffr";
        this.dosomething = function (salary) { return function (tax) { return salary - tax; }; };
    }
    studentx.prototype.enroll = function (coursename) {
        return "enrolling courses";
    };
    studentx.prototype.trainerallocation = function () {
        console.log("trainer namewho is allocated");
    };
    studentx.prototype.submitIDproofs = function (idproof) {
        return "done if the id proofs are submitted";
    };
    return studentx;
}());
var obj = new studentx;
console.log(obj.dosomething(1000)(500));
