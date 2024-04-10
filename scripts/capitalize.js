import { capitalize } from '../src/capitalize.js'

const table = [
  { original: 'luana de abreu', capitalized: capitalize('luana de abreu') },
  { original: 'capitão nascimento', capitalized: capitalize('capitão nascimento') },
  { original: 'maria silvana', capitalized: capitalize('maria silvana') },
  { original: 'jonathan davis', capitalized: capitalize('jonathan davis') },
  { original: 'sr Tumnus', capitalized: capitalize('sr Tumnus') },
  { original: 'Gandalf the Grey', capitalized: capitalize('Gandalf the Grey') },
]

console.log('\n')
console.log('### Capitalize ###')
console.log('\n')
console.table(table)
console.log('\n')