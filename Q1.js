// Question 1: Student Grade Processing
// Given an array of student objects:
//
// a) Create a new array containing only the student names
// b) Create a new array with grade percentages converted to letter grades (A: 90+, B: 80-89, C: 70-79, D: 60-69, F: <60)
// c) Add a "status" property to each student object ("Excellent" for 90+, "Good" for 80-89, "Average" for 70-79, "Needs Improvement" for <70)

const students = [
    { name: "Alice", grade: 85, subject: "Math" },
    { name: "Bob", grade: 92, subject: "Science" },
    { name: "Charlie", grade: 78, subject: "Math" },
    { name: "Diana", grade: 96, subject: "English" },
    { name: "Eve", grade: 88, subject: "Science" }
  ];
  
// Ans- a)Create a new array containing only the student names
const newArr = students.map((student) => student.name);
console.log(newArr);

// Ans- b)Create a new array with grade percentages converted to letter grades (A: 90+, B: 80-89, C: 70-79, D: 60-69, F: <60)
const getGrade = students.map((student) => { 
    if (student.grade >= 90) {
       return student.grade = "A";
    }else if(student.grade >= 80){
        return student.grade = "B";
     }else if(student.grade >= 70){
        return student.grade = "C";
     }else if(student.grade >= 60){
        return student.grade = "D";
    } else {
        return student.grade = "F";
     }
});
console.log(getGrade);

//Ans-  c) Add a "status" property to each student object ("Excellent" for 90+, "Good" for 80-89, "Average" for 70-79, "Needs Improvement" for <70)
const addStatus = students.map((student) => {
    if (student.grade >= 90) {
        student.status = "Excellent";
    } else if (student.grade >= 80) {
        student.status = "Good";
    } else if (student.grade >= 70) {
        student.status = "Average";
    } else if (student.grade >= 60) {
        student.status = "Needs Improvement";
    } else {
        student.status = "Fail";
    }
    return student;
});
console.log(addStatus);