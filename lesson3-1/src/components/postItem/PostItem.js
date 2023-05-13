import React from "react";
import cl from "./PostItem.module.css";

function PostItem({ id, title, author, desc }) {
  return (
    <div className={cl.post}>
      <h1>
        {id}, {title}
      </h1>
      <h2>{author}</h2>
      <p>{desc}</p>
    </div>
  );
}

export default PostItem;
