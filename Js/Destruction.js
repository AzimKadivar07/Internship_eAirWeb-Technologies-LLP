
let student = {
  name: "Azim",
  age: 21,
  course: "Computer Engineering"
};

// Without Destructuring
console.log(student.name);
console.log(student.age);

// With Destructuring
let { name, age } = student;

console.log(name);
console.log(age);
