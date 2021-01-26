import {combineReducers} from 'redux';
import article from './article_reducer';
import gallery from './gallery_reducers';

const rootReducer = combineReducers({
    article,
    gallery
})

export default rootReducer;