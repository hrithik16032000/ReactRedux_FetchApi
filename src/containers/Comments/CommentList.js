import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Comment from "./Comment";
import axios from "axios";
import { setComments, countComments } from "../../redux/actions/componentActions.js";

const CommentListing = () => {
    //const comments = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchComments = async () => {
            const response = await axios
                .get("https://jsonplaceholder.typicode.com/comments")
                .catch((error) => {
                    console.log("Error", error);
                });
            dispatch(setComments(response.data));
            dispatch(countComments(response.data.length)) ;
        };
        fetchComments();
    });

    return (
        <div className="comment-listing">
            <Comment />
        </div>
    );
};

export default CommentListing;