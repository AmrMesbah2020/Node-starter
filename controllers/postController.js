const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/asyncHandler");

const Post = require("../models/Post");

const { postMessages } = require("../utils/messages.json");

const storePost = asyncHandler(async (req, res, next) => {
    const { title, body } = req.body;  
    try {
        const newPost = new Post({
            title: title,
            body: body,
            author: req.userId
        });
        post = await newPost.save();
        res.status(201).json({
            success: true,
            message: postMessages.created,
            data: {}
        });
    } catch (err) {
        next(err);
    }
});


const listPosts = asyncHandler(async(req, res, next) => {
    try {
        const posts = await Post.find({
            author: req.userId
        }).select({
            "title": 1,
            "body": 1,
        }).populate("author", 'name')
        res.status(200).json({
            success: true,
            message: postMessages.listed,
            data:posts
        });
    }catch(err){
        next(err);
    }
})

const showPost = asyncHandler(async (req, res, next) => {
    const postId = req.params.post;
    try {
        const post = await Post.findById(postId).populate("author", 'name')
        res.status(200).json({
            success: true,
            message: postMessages.showed,
            data:post
        });
    }catch(err){
        next(err);
    }
})

const deletePost = asyncHandler(async (req, res, next) => {
    const postId = req.params.post;
    try {
        const post = await Post.findById(postId);
        if(!post) throw new Error(postMessages.notFound);
        await post.softDelete();
        res.status(200).json({
            success: true,
            message: postMessages.deleted,
            data:{}
        });
    }catch(err){
        next(err)
    }
})

const updatePost = asyncHandler(async (req, res, next) => {
    const postId = req.params.post;
    const {title, body} = req.body;
    try {
        const post = await Post.findById(postId);
        if(!post) throw new Error(postMessages.notFound);
        post.title = title;
        post.body = body;
        await post.save();
        res.status(200).json({
            success: true,
            message: postMessages.updated,
            data:post
        });
    }catch(err){
        next(err)
    }
})

module.exports = { storePost, listPosts, showPost, deletePost, updatePost }
