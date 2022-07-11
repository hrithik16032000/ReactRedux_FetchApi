import React from "react";
import { useSelector } from "react-redux";

import { styled } from "@mui/material/styles";
import { Box, Grid, Paper } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const Post = () => {
    const posts = useSelector((state) => state.allPosts.posts);

    return (
        <div className="post">
            <h1 style={{ textAlign: "center" }}>POSTS</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={{ xs: 4, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {posts.map((post) => (
                        <Grid
                            item
                            xs={6}
                            sm={4}
                            md={4}
                            key={post.id}
                            style={{ height: "100%" }}
                        >
                            <Item style={{backgroundColor: "#969696"}}>
                            <i>UserID: {post.id}</i>
                            </Item>
                            <Item>
                                <h3>Title: {post.title}</h3>
                            </Item>
                            <Item>
                                <i>UserID: {post.body}</i>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};

export default Post;
