import { blogService } from "./blogService.js";

export const showSinglePost = async (postId) => {
  try {
    const post = await blogService.fetchPost(postId);

    console.log(post);
  } catch (error) {
    console.log(`Unable to get post with id "${postId}"!`);
    throw new Error(`Unable to get post with id "${postId}"!`);
  }
};

// showSinglePost(1); // logs the post with id "1"
// showSinglePost("invalid"); // logs the error and throw
