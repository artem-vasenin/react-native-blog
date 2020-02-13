import {createStore, combineReducers} from 'redux';
import {postReducer} from './reducers/post';

const rootReducer = combineReducers({
    post: postReducer, // любой ключ и значение нужный редюсер
});

export default createStore(rootReducer);