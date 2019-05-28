import React from "react";
import Post from "./Post";
import "./Posts.css";

const PostsContainer = props => {
  // console.log(props);
  return (
    <div className="posts-container-wrapper">
      {props.posts.map(p => (
        <Post key={p.imageUrl} post={p} />
      ))}
    </div>
  );
};

export default PostsContainer;
