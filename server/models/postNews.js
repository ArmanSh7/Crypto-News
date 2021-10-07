import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title:  String, // String is shorthand for {type: String}
  newsBody:   String,
  selectedFile: String,
  author: String,
  tags: [String],
  LikeNum: {
    type: Number,
    default:  0
  },
  date: { type: Date, default: new Date() },

});

const PostNews = new mongoose.model("PostNews", PostSchema);
export default PostNews;

