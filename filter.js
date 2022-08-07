  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
// Filters the array of people who are age 21 and over.
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);
// [ { name: 'Michael', age: 23 } ]

// Filters the array above, picking out only Paul.
// The [0] takes the item out of an array.
const paul = people.filter(p => p.name === 'Paul')[0];
console.log(paul);
// [ { name: 'Paul', age: 18 } ]


// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];
 // Filtering through the above array of objects.
 // Filters the students with 5 or more years of experience.
const has5YrsExp = skill => skill.yrsExperience >= 5
const hasStrongSkills = students => students.skills.filter(has5YrsExp).length > 0;
const candidates = students.filter(hasStrongSkills);

console.log(candidates);
// Picks out the names from the candidates filtered array.
const names = candidates.map(student => student.name);
console.log(names);