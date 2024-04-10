import { showSinglePost } from '../src/showSinglePost.js'

const main = async () => {
  console.log('\n')
  console.log('### List Posts ###')
  console.log('\n')

  console.log('## Posts 1 ##')
  await showSinglePost(1)

  console.log('\n')
  console.log('## Posts 2 ##')
  await showSinglePost(2)

  console.log('\n')
  console.log('## Posts 3 ##')
  await showSinglePost(3)

  console.log('\n')
}

main()
