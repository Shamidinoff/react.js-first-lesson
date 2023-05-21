import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PostItem from "./PostItem";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    console.log("POSTS DATA: " + posts);
  });

  async function getPosts() {
    const response = await axios.get("https://dummyjson.com/posts");
    // console.log(`API POSTS: ${response.data.posts}`);
    setPosts(response.data.posts);
  }

  const postItems = posts.map((post) => {
    return (
      <PostItem
        title={post.title}
        body={post.body}
        reactions={post.reactions}
        tags={post.tags}
        id={post.id}
      />
    );
  });

  return (
    <div>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {postItems}
        </Grid>
      </Box>
    </div>
  );
}
