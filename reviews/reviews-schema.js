import mongoose from 'mongoose';

const schema = mongoose.Schema({
    content: String,
    username: String,
    likes: Number,
    liked: Boolean,
    albumId: Number,
}, {collection: 'reviews'});

export default schema;