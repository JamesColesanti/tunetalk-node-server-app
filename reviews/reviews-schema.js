import mongoose from 'mongoose';

const schema = mongoose.Schema({
    content: String,
    userId: String,
    likes: Number,
    liked: Boolean,
    albumId: String,
    stars: Number,
    title: String,
}, {collection: 'reviews'});

export default schema;