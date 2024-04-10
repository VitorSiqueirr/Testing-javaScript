import { blogService } from './blogService.js'

export const listPosts = async () => {
  try {
    const posts = await blogService.fetchPosts()
    const postsWithIdAndTitle = posts.map(post => ({
      userId: post.userId,
      title: post.title,
    }))

    console.table(postsWithIdAndTitle)
  } catch (error) {
    console.error(error)
  }
}
