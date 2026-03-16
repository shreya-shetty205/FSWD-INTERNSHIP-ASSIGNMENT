
let students = [
  { name: "Rahul", marks: [85, 90, 78] },
  { name: "Anjali", marks: [88, 76, 95] },
  { name: "Kiran", marks: [70, 80, 65] }
];


function calculateAverage(marks) {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  return (total / marks.length).toFixed(2);
}


for (let i = 0; i < students.length; i++) {
  let avg = calculateAverage(students[i].marks);
  console.log("Name: " + students[i].name);
  console.log("Average: " + avg);
  console.log("-------------------");
}