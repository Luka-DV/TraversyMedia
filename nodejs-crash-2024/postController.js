
const posts = [
    {id: 1, title: "Post One"},
    {id: 2, title: "Post Two"}
];

/* export */ const getPosts = () => posts;

//or:

// export { getPosts };

//or, to make a "default" export:

export default getPosts;

//you can still export things as not default:

export const getPostsLength = () => posts.length;

