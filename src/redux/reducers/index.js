import { combineReducers } from 'redux';
import { albumsCountReducer, albumsReducer, commentsCountReducer, commentsReducer, photosCountReducer, photosReducer, postsCountReducer, postsReducer } from './ComponentReducer';


const reducers = combineReducers({
    allAlbums: albumsReducer,
    allComments: commentsReducer,
    allPhotos: photosReducer,
    allPosts: postsReducer,
    allPostsCount: postsCountReducer,
    allAlbumsCount: albumsCountReducer,
    allCommentsCount: commentsCountReducer,
    allPhotosCount: photosCountReducer
})

export default reducers;