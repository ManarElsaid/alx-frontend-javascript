// export default function updateStudentGradeByCity(list, city, newGrades){
//   let studentList = list.filter((student) => student.location === city);

//   let gradeObj = newGrades.find((grade) => grade.studentId === student.id);
// }

export default function updateStudentGradeByCity(list, city, newGrades) {
  const studentList = list.filter((student) => student.location === city);

  studentList.forEach((student) => {
    // Find the corresponding grade object for the student
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    // If the student has a grade in newGrades, update the grade; otherwise, set it to 'N/A'
    student.grade = gradeObj ? gradeObj.grade : 'N/A';
  });

  return studentList;
}
