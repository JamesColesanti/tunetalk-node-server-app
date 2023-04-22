import mongoose from 'mongoose';

const schema = mongoose.Schema({
    content: String,
    userId: String,
    likes: Number,
    liked: Boolean,
    albumId: String,
    stars: Number,
}, {collection: 'reviews'});

export default schema;