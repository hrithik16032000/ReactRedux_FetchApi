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

//const { id, title, UserId } = album;

const Album = () => {
    const albums = useSelector((state) => state.allAlbums.albums);

        return(
        <div className="album">

<h1 style={{ textAlign: "center" }}>ALBUMS</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={{ xs: 4, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {albums.map((album) => (
                        <Grid
                            item
                            xs={6}
                            sm={4}
                            md={4}
                            lg={2}
                            key={album.id}
                            style={{ height: "100%" }}
                        >
                            <Item style={{backgroundColor: "#969696"}}>
                                <i>AlbumID: {album.id}</i>
                            </Item>
                            <Item style={{backgroundColor: "#F0F8FF"}}>
                                <i>UserID: {album.userId}</i>
                            </Item>
                            <Item>
                                <h3>Album Title: {album.title}</h3>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
};

export default Album;