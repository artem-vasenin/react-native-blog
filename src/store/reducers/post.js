import { LOAD_POSTS, TOGGLE_BOOKED } from "../types";

const initialState = {
    posts: [],
    bookedPosts: [],
};

export const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_POSTS: return {
            ...state,
            posts: action.payload,
            bookedPosts: action.payload.filter(i => i.booked),
        };
        case TOGGLE_BOOKED:
            const posts = state.posts.map(i => {
                if (i.id === action.payload) {
                    i.booked = !i.booked;
                }
                return i;
            })
            return {
            ...state,
            posts,
            bookedPosts: posts.filter(i => i.booked),
        };
        default: return state;
    }
};