import { UPDATE_POSTS } from "./actionTypes";

export function fetchPosts() {
  return (dispatch) => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data = data.slice(1, 6);
        console.log(data);
        dispatch(updatePosts(data));
      })
      .catch((e) => console.log(e));
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
