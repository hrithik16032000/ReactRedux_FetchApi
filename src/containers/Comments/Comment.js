import React from "react";
import { useSelector } from "react-redux";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Comment = () => {
    const comments = useSelector((state) => state.allComments.comments);
    const renderComment = comments.map((comment) => {
        const { postId, name, email, body } = comment;
        //console.log(comment);
        return (
            <div className="comment">
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                        >
                        PostID: {postId}
                        </Typography>
                        <h4>Topic: {name}</h4>
                        <Typography
                            sx={{ fontSize: 12 }}
                            color="text.secondary"
                            gutterBottom
                        >
                        EmailId: {email}
                        </Typography>

                        <Typography variant="body2">
                        Comment: {body}</Typography>
                    </CardContent>
                </Card>
            </div>
        );
    });
    return (
        <>
            <h1 style={{textAlign: "center"}}>COMMENTS</h1>
            {renderComment}
        </>
    );
};

export default Comment;
