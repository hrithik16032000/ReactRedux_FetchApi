import React from "react";
import { useSelector } from "react-redux";

import { Tabs, Tab, AppBar, Badge } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CommentIcon from "@mui/icons-material/Comment";
import AlbumIcon from "@mui/icons-material/Album";
import CollectionsIcon from "@mui/icons-material/Collections";

import PostListing from "../Posts/PostListing";
import AlbumListing from "../Albums/AlbumListing";
import PhotoListing from "../Photos/PhotoListing";
import CommentListing from "../Comments/CommentList";

const TabBar = () => {

    const postCount = useSelector((state) => state.allPostsCount.postsCount);
    const commentCount = useSelector(
        (state) => state.allCommentsCount.commentsCount
    );
    const albumCount = useSelector((state) => state.allAlbumsCount.albumsCount);
    const photoCount = useSelector((state) => state.allPhotosCount.photosCount);

    //const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        //history.push(`/${tabNameToIndex[newValue]}`);
        setSelectedTab(newValue);
    };

    return (
        <>
            <AppBar position="static">
                <Tabs
                    value={selectedTab}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                >
                    <Tab
                        label={
                            <Badge
                                badgeContent={postCount}
                                max={999}
                                color="primary"
                            >
                                <h3>HOME</h3>
                                <HomeIcon />
                            </Badge>
                        }
                    ></Tab>

                    <Tab
                        label={
                            <Badge
                                badgeContent={commentCount}
                                max={999}
                                color="primary"
                            >
                                <h3>COMMENTS</h3>
                                <CommentIcon />
                            </Badge>
                        }
                    />
                    <Tab
                        label={
                            <Badge badgeContent={albumCount} color="primary">
                                <h3>ALBUMS</h3>
                                <AlbumIcon />
                            </Badge>
                        }
                    />
                    <Tab
                        label={
                            <Badge badgeContent={photoCount} color="primary">
                                <h3>PHOTOS</h3>
                                <CollectionsIcon />
                            </Badge>
                        }
                    />
                </Tabs>
            </AppBar>
            {selectedTab === 0 && <PostListing />}
            {selectedTab === 1 && <CommentListing />}
            {selectedTab === 2 && <AlbumListing />}
            {selectedTab === 3 && <PhotoListing />}
        </>
    );
};

export default TabBar;
