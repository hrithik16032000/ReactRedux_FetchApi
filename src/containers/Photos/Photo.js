import React from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const Photo = () => {
    const photos = useSelector((state) => state.allPhotos.photos);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <h1 style={{textAlign: "center"}}>PHOTOS</h1>
            <Grid
                container
                spacing={{ xs: 4, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {photos.map((photo) => (
                    <Grid item xs={6} sm={4} md={4} key={photo.id}>
                        <Item>
                            <img src={`${photo.url}`} alt="placeholder" style={{width: "200px", height: "200px"}}/>
                        </Item>
                        <Item>
                            <i>IMAGE {photo.id}</i>
                        </Item>
                        <Item>
                        <i>AlbumID:  {photo.albumId}</i>
                        </Item>
                        <Item>
                        <h4>Title: {photo.title}</h4>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Photo;
