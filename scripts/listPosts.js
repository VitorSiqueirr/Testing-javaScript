import { listPosts } from '../src/listPosts.js'

const main = async () => {
  console.log('\n')
  console.log('### List Posts ###')
  console.log('\n')

  await listPosts()

  console.log('\n')
}

main()
