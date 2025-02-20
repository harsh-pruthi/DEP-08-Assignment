let students = [{name:"Harsh", age:15, grades:[2,43,4,5,4]},{name:"Vansh", age:20, grades:[2,43,4,5,4]},{name:"Mayan", age:20, grades:[10,2,30,4]},{name:"Srishti", age:15, grades:[2,43,4,5,4]}]

let filteredStudents = students.filter((student)=>student.age>18);

console.log(filteredStudents);

function calculateAvg(arr){
    let sum =arr.reduce((a,c)=>a=a+c,0);
    return sum/arr.length;
}


let avgGrade = filteredStudents.map((student) => {
    student.averageGrade = calculateAvg(student.grades);
    return student;
});

console.log("Students with their average grades:", avgGrade);

let average = avgGrade.reduce((s,a)=>s=s+a.averageGrade,0);

console.log("Class average", average/avgGrade.length);