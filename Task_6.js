let salaries = [10000, 20000, 30000, 40000];

let salary = salaries.reduce((acc, c, i, t) => {
  return acc + c;
}, 0);

console.log(salary);

let avg_salary = salary / salaries.length;

console.log(avg_salary);
