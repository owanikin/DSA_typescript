// class Person {
//     name: string;
//     age: number;

//     // constructor(name: string, age: number) {
//     //     this.name = name;
//     //     this.age = age;
//     // }

// }
// class Employee extends Person {
//     salary: number;
// }

// enum Color {
//     Red,
//     Green,
//     Blue
// }

// let c: Color = Color.Blue
// console.log(c);


// let employee = new Employee()
// employee.age = 17
// employee.name = 'Alele'
// employee.salary = 10000

// let tup: [string, number] = ["Hello", 45]

// // let person = new Person("Alele", 89);



// // let person = new Person()
// // person.age = 12;
// // person.name = "Alele"


// function convertNumberToArray(arg: number): number[] {
//     return [arg]
// }

function convertToArray<T>(arg: T): T[] {
    return [arg]
}

convertToArray(1)
convertToArray("Ade")
convertToArray(true)
