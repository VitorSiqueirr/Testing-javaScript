import { getProp } from '../src/getProp.js'

const person = {
  name: 'Matheus das Neves',
  age: 40,
  address: {
    street: 'Rua São João',
    number: 123,
  },
  skills: [
    { id: 1, name: 'JavaScript', yearOfExperience: 5 },
    { id: 2, name: 'Ruby on Rails', yearOfExperience: 2 },
  ]
}

console.log('\n')
console.log('### Get Prop ###')
console.log('\n')

console.log('## The Object ##')
console.log(person)

console.log('\n## With Prop String ##')

console.log('"name":', getProp(person, 'name'))
console.log('"age":', getProp(person, 'age'))
console.log('"address":', getProp(person, 'address'))
console.log('"invalid":', getProp(person, 'invalid'))

console.log('\n## With Prop Array ##')

console.log(['address', 'number'], '->', getProp(person, ['address', 'number']))
console.log(['skills', '0', 'name'], '->', getProp(person, ['skills', '0', 'name']))
console.log(['skills', '1', 'yearOfExperience'], '->', getProp(person, ['skills', '1', 'yearOfExperience']))
console.log(['invalid'], '->', getProp(person, ['invalid']))

console.log('\n')