import express from 'express';
import { getNews, createNews, updateNews, deleteNews, likeNews } from '../controllers/news.js';

const router = express.Router();
router.get('/', getNews);
router.post('/', createNews);
router.patch('/:id', updateNews);
router.delete('/:id', deleteNews);
router.patch('/:id/likePost', likeNews);
export default router;