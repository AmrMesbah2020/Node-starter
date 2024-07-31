const Joy = require("@hapi/joi")

const createPost = Joy.object({
    title: Joy.string().required(),
    content: Joy.string().required(),
});

const updatePost = Joy.object({
    title: Joy.string(),
    content: Joy.string(),
});

module.exports = {createPost, updatePost}