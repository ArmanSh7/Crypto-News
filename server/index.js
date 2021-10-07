import express from 'express';
// import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors';

import newsRoutes from './routes/news.js';

const app = express();
dotenv.config();
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/news', newsRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log("Server is running on port " + PORT)))
    .catch((err) => console.log(err.message));

// mongoose.set("useFindAndModify", false);