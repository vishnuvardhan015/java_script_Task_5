let employees = [
  { name: "Ravi", salary: 25000 },
  { name: "Meena", salary: 60000 },
  { name: "Arun", salary: 45000 },
  { name: "Priya", salary: 80000 },
  { name: "John", salary: 30000 },
];

//Get employees whose salary is greater than 40000.

let newfliter = employees.filter((c, i, t) => {
  return c.salary > 40000;
});
console.log(newfliter);

// Find the first employee whose salary is above 70000.

let newfind = employees.filter((c1, i1, t1) => {
  return c1.salary > 70000;
});
console.log(newfind);

// Calculate the total salary of all employees.

let newreducer = employees.reduce((acc, c2, i2, t2) => {
  return acc + c2.salary;
}, 0);
console.log(newreducer);

// Check if any employee salary is below 20000.

let newfliter2 = employees.filter((c3, i3, t4) => {
  return c3.salary < 20000;
});
console.log(newfliter2);

// Check if all employees salary are above 20000.

let newfliter3 = employees.filter((c4, i4, t4) => {
  return c4.salary > 20000;
});
console.log(newfliter3);
