var students = ["Luis", "Javi", "Ana", "Alicia", "Maria"];

function greetStudents(student) {
  console.log(`Hola ${student}`);
}

//for
for (var i = 0; i < students.length; i++) {
  greetStudents(students[i]);
}

//for... of
for (var student of students) {
  greetStudents(student);
}

//while
while (students.length > 0) {
  console.log(students);
  var student = students.shift();
  greetStudents(student);
}

/* 
(5) ["Luis", "Javi", "Ana", "Alicia", "Maria"]
Hola Luis
(4) ["Javi", "Ana", "Alicia", "Maria"]
Hola Javi
(3) ["Ana", "Alicia", "Maria"]
Hola Ana
(2) ["Alicia", "Maria"]
Hola Alicia
["Maria"]
Hola Maria */

//forEach
students.forEach((student) => greetStudents(student));
