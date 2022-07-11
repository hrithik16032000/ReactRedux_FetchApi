import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Post from "./Post";
import axios from "axios";
import { setPosts, countPosts } from "../../redux/actions/componentActions.js";

const PostListing = () => {
    //const posts = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios
                .get("https://jsonplaceholder.typicode.com/posts")
                .catch((error) => {
                    console.log("Error", error);
                });
            dispatch(setPosts(response.data));
            dispatch(countPosts(response.data.length));
        };
        fetchPosts();
    });

    return (
        <div className="post-listing">
            <Post />
        </div>
    );
};

export default PostListing;
