import * as reviewsDao from '../reviews/reviews-dao.js'

const createReview = async (req, res) => {
    const newReview = req.body;
    newReview.likes = 0;
    newReview.liked = false;
    newReview.dislikes = 0;
    newReview.disliked = false;
    const insertedTuit = await reviewsDao.createReview(newReview);
    res.json(insertedTuit);
}    

const findReviews = async (req, res) => {
    const aid = req.params.aid;
    const reviews = await reviewsDao.findReviews();
    const reviewsForGivenAlbum = [];
    for (let i = 0; i < reviews.length; i++) {
        const curReview = reviews[i];
        if (curReview.albumId == aid) {
            reviewsForGivenAlbum.push(curReview);
        }
    }
    res.json(reviewsForGivenAlbum);
}

const updateReview = async (req, res) => {
    const ridToUpdate = req.params.rid;
    const updates = req.body;
    const status = await tuitsDao.updateReview(ridToUpdate, updates);
    res.json(status);
}

const deleteReview = async (req, res) => {
    const ridToDelete = req.params.rid;
    const status = await tuitsDao.deleteReview(ridToDelete);
    res.json(status);    
}

export default (app) => {
    app.post('/api/albums/:aid/reviews', createReview);
    app.get('/api/albums/:aid/reviews', findReviews);
    app.put('/api/albums/:aid/reviews/:rid', updateReview);
    app.delete('/api/albums/:aid/reviews/:rid', deleteReview);
}
