import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";
import { useParams } from "react-router-dom";
import TagItem from "./components/tagItem/TagItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  //   minWidth: "400px",
}));

function PostPage(props) {
  const [post, setPost] = useState({});
  const params = useParams();

  useEffect(() => {
    getPost();
  }, []);

  //

  const tagItems = post.tags?.map((tag) => {
    return <TagItem>{tag}</TagItem>;
  });

  async function getPost() {
    const response = await axios.get(
      "https://dummyjson.com/posts/" + params.id
    );
    setPost(response.data);
    console.log(response);
  }

  return (
    <Grid item xs={6} md={8}>
      <Item>
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <div>
            <Stack direction="row" spacing={2} justifyContent="center">
              {tagItems}
            </Stack>
          </div>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <FavoriteBorderIcon src="" alt="" />
            <span>{post.reactions}</span>
          </Stack>
        </div>
      </Item>
    </Grid>
  );
}

export default PostPage;
