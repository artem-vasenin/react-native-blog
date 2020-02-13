import { LOAD_POSTS } from '../types';
import { DATA } from '../../mocks';

export const loadPosts = () => {
    return {
        type: LOAD_POSTS,
        payload: DATA,
    };
};