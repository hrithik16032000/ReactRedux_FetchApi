import { ActionTypes } from "../constants/action-types";

const initialState = {
    posts: [],
    comments: [],
    albums: [],
    photos: [],
    postsCount: 0,
    commentsCount: 0,
    albumsCount: 0,
    photosCount: 0,
};

export const postsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_POSTS:
            return { ...state, posts: payload };
        default:
            return state;
    }
};
export const postsCountReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_POSTCOUNT:
            return { ...state, postsCount: payload };
        default:
            return state;
    }
};


export const commentsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_COMMENTS:
            return { ...state, comments: payload };
        default:
            return state;
    }
};
export const commentsCountReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_COMMENTCOUNT:
            return { ...state, commentsCount: payload };
        default:
            return state;
    }
};


export const albumsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ALBUMS:
            return { ...state, albums: payload };
        default:
            return state;
    }
};
export const albumsCountReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ALBUMCOUNT:
            return { ...state, albumsCount: payload };
        default:
            return state;
    }
};



export const photosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PHOTOS:
            return { ...state, photos: payload };
        default:
            return state;
    }
};
export const photosCountReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PHOTOCOUNT:
            return { ...state, photosCount: payload };
        default:
            return state;
    }
};

