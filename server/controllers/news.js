import express from 'express';
import mongoose from 'mongoose';
import PostNews from '../models/postNews.js';

export const getNews = async (req, res) => {
    try {
        const posts = await PostNews.find();

        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createNews = async (req, res) => {
    const { title, newsBody, selectedFile, author, tags } = req.body;

    const newPost = new PostNews({ title, newsBody, selectedFile, author, tags })

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateNews = async (req, res) => {

    const { id } = req.params;
    const news = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id} Exists`);


    const updatedNews = await PostNews.findByIdAndUpdate(id, {...news, id}, { new: true });

    res.json(updatedNews);
}

export const deleteNews = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    // console.log("Id is "+ id)

    await PostNews.findByIdAndRemove(id);

    res.json({ message: "News deleted successfully." });
}

export const likeNews = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const newsPost = await PostNews.findById(id);

    const updatednewsPost = await PostNews.findByIdAndUpdate(id, { LikeNum: newsPost.LikeNum + 1 }, { new: true });

    res.json(updatednewsPost);
}


