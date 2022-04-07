import mongoose from 'mongoose';

const schema = mongoose.Schema({
    _id: String,
    topic: String,
    postedBy: {
        username: String,
    },
    liked: Boolean,
    disliked: Boolean,
    verified: Boolean,
    handle: String,
    title: String,
    tuit: String,
    likes: Number,
    time: String,
    "logo-image": String,
    "avatar-image": String,
    tuits: String,
    stats: {
        comments: Number,
        retuits: Number,
        likes: Number,
        dislikes: Number,
    },
}, {collection: 'tuits'});

export default schema;