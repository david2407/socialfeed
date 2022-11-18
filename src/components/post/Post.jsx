import React from "react";
import "./Post.scss";
import { useNavigate } from "react-router-dom";

export const Post = ({ post }) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/post", { state: post });
  };

  return (
    <div
      className="post"
      onClick={() => {
        navigateTo();
      }}
    >
      <section className="post__text">{post.text}</section>
      <section className="post__author">Author: {post.user.name}</section>
      <section className="post__date">
        Date:{" "}
        {post.created_at
          ? `${post.created_at.split(":")[0]} : ${
              post.created_at.split(":")[1]
            }`
          : "Not found"}
      </section>
    </div>
  );
};
