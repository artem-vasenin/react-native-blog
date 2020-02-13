import { LOAD_POSTS } from "../types";

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
        default: return state;
    }
};