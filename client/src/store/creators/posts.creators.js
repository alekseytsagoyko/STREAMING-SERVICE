import { SET_POSTS } from "@store/actions/posts.actions";

const setPosts = (posts) => {
    return {
        type: SET_POSTS,
        posts
    };
}

export { setPosts };