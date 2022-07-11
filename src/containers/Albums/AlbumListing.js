import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Album from "./Album";
import axios from "axios";
import { setAlbums, countAlbums } from "../../redux/actions/componentActions.js";

const AlbumListing = () => {
    //const albums = useSelector((state) => state);
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchAlbums = async () => {
            const response = await axios
                .get("https://jsonplaceholder.typicode.com/albums?userId=1")
                .catch((error) => {
                    console.log("Error", error);
                });
            dispatch(setAlbums(response.data));
            dispatch(countAlbums(response.data.length)) 
        };
        fetchAlbums();
    });

    return (
        <div className="album-listing">
            <Album />
        </div>
    );
};

export default AlbumListing;