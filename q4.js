class Student{
    constructor(firstName, lastName, studentID){
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentID = studentID;
  }
}

class Assignment{
  constructor(studentID, uRL, assignment, grade){
    this.studentID = studentID;
    this.uRL = uRL;
    this.assignment = assignment;
    this.grade = grade;
  }
}