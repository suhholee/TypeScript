// const person: {
//   name: string
//   age: number
// } = {
// const person: {
//   name: string
//   age: number
//   hobbies: string[],
//   role: [number, string]
// } = {
//   name: 'Suhho',
//   age: 25,
//   hobbies: ['Sports', 'Movies'],
//   role: [2, 'developer']
// }

// const admin = 0
// const user = 1
// const readOnly = 2

enum Role { admin = 5, readOnly, author };

const person = {
  name: 'Suhho',
  age: 25,
  hobbies: ['Sports', 'Movies'],
  role: Role.admin
}

// person.role = [0, 'admin']

let favoriteActivities: any[]
favoriteActivities = ['Sports', 1]

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}

if (person.role == Role.admin) {
  console.log('is admin')
}