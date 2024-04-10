import axios from "axios";

export class BlogService {
  async fetchPosts() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return response.data;
  }

  async fetchPost(postId) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    return response.data;
  }
}

export const blogService = new BlogService();
// const data = await blogService.fetchPosts();
// console.log(data);
