import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Photo from "./Photo"
import axios from "axios";
import { setPhotos, countPhotos } from "../../redux/actions/componentActions.js";

const PhotosListing = () => {
    //const photos = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchPhotos = async () => {
            const response = await axios
                .get("https://jsonplaceholder.typicode.com/photos?albumId=1")
                .catch((error) => {
                    console.log("Error", error);
                });
            dispatch(setPhotos(response.data));
            dispatch(countPhotos(response.data.length)) 
        };
        fetchPhotos();
    });

    return (
        <div className="photos-listing">
            <Photo />
        </div>
    );
};

export default PhotosListing;