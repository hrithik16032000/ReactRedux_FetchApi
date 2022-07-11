import { ActionTypes } from "../constants/action-types";

export const setPosts = (posts) => {
    return {
        type: ActionTypes.SET_POSTS,
        payload: posts,
    };
};

export const countPosts = (posts) => {
    return {
        type: ActionTypes.SET_POSTCOUNT,
        payload: posts,
    };
};

export const setComments = (comments) => {
    return {
        type: ActionTypes.SET_COMMENTS,
        payload: comments,
    };
};

export const countComments = (comments) => {
    return {
        type: ActionTypes.SET_COMMENTCOUNT,
        payload: comments,
    };
};



export const setAlbums = (albums) => {
    return {
        type: ActionTypes.SET_ALBUMS,
        payload: albums,
    };
};

export const countAlbums = (albums) => {
    return {
        type: ActionTypes.SET_ALBUMCOUNT,
        payload: albums,
    };
};

export const setPhotos = (photos) => {
    return {
        type: ActionTypes.SET_PHOTOS,
        payload: photos,
    };
};

export const countPhotos = (photos) => {
    return {
        type: ActionTypes.SET_PHOTOCOUNT,
        payload: photos,
    };
};

