import React, { useState, useEffect } from "react";

function Posts(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let request = await fetch("https://jsonplaceholder.typicode.com/posts"),
          response = await request.json();

        setPosts(response.slice(0, 10));
      } catch (status) {
        console.log(status);
      }
    })();
  }, []);

  const deletePost = async (id) => {
    try {
      let request = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
          { method: "DELETE" }
        ),
        response = await request.json();

      setPosts((prevState) => prevState.filter((element) => element.id !== id));
    } catch (status) {
      console.log(status);
    }
  };

  return posts.length ? (
    <ul>
      {posts.map((item) => (
        <li key={item.id}>
          {item.title}{" "}
          <button onClick={() => deletePost(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}

export default Posts;
