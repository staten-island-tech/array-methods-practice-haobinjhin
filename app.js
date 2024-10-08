/* const students = [
    { name: 'Alice', age: 20, grade: 85 },
    { name: 'Bob', age: 22, grade: 90 },
    { name: 'Charlie', age: 21, grade: 78 },
    { name: 'Diana', age: 23, grade: 95 },
  ];


const topstudents = students.filter((student) => student.grade > 80)
console.log("Students who scored higher than 80")
topstudents.forEach((students) => console.log(students.name));



const youngstudents = students.filter((student) => student.age <= 21)
console.log("Students who are 21 or younger")
youngstudents.forEach((students) => console.log(students.name))
 */


const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics', rating: 4.5 },
    { name: 'Phone', price: 800, category: 'Electronics', rating: 4.7 },
    { name: 'Headphones', price: 150, category: 'Accessories', rating: 4.3 },
    { name: 'Monitor', price: 300, category: 'Electronics', rating: 4.6 },
    { name: 'Keyboard', price: 100, category: 'Accessories', rating: 4.1 },
    { name: 'Chair', price: 250, category: 'Furniture', rating: 4.0 },
    { name: 'Desk', price: 450, category: 'Furniture', rating: 4.8 }
  ];

products.forEach((products) => console.log(products.name + " " + products.price))

products.price === 1.1*products.price