const arr = [1, 2, 3, 4, 5, 6];

// 1)
const isArr = Array.isArray(arr);
console.log(isArr);

// 2)
const firstEl = arr[0];
const firstEl1 = arr.at(0);
console.log(firstEl, firstEl1);

// 3) 
const lastEl = arr[arr.length -1];
const lastEl1 = arr.at(-1);
console.log(lastEl, lastEl1);

// 4)
const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
const o = ["th","st","nd","rd"];

console.log(`1${o[0]} choice is ${color[0]}, 
2${o[1]} choice is ${color[1]},
3${o[2]} choice is ${color[2]},
`);


// 5)
const student = {
    firstname: "Nao",
    lastName: "Nakamura",
    age: 23,
    country: 'Japanese',
    parent: {
        mother: {firstname: "Emi", lastname: "Tanaka"},
        father: {firstname: "Kaito", lastname: "Nakamura"}
    }
};
console.log(student);

student.profession = 'artist';
delete student.lastName;
student.parent.mother.lastname = "Nakamura";
console.log(student);
