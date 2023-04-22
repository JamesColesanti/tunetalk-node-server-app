import * as reviewsDao from '../reviews/reviews-dao.js'

const createReview = async (req, res) => {
    const newReview = req.body;
    newReview.likes = 0;
    newReview.liked = false;
    const insertedReview = await reviewsDao.createReview(newReview);
    res.json(insertedReview);
}    

const findTop5Reviews = async (req, res) => {
    const reviews = await reviewsDao.findReviews();
    const top5Reviews = [];
    const upperBound = reviews.length < 5 ? reviews.length : 5;
    for (let i = 0; i < upperBound; i++) {
        top5Reviews.push(reviews[i]);
    }
    res.json(top5Reviews);
}

const findReviewsForAlbum = async (req, res) => {
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

const findReviewsByUser = async (req, res) => {
    const uid = req.params.uid;
    const reviews = await reviewsDao.findReviews();
    const reviewsByUser = [];
    for (let i = 0; i < reviews.length; i++) {
        const curReview = reviews[i];
        if (curReview.userId == uid) {
            reviewsByUser.push(curReview);
        }
    }
    res.json(reviewsByUser);
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
    app.get('/api/albums/:aid/reviews', findReviewsForAlbum);
    app.get('/api/topReviews', findTop5Reviews);
    app.get('/api/users/:uid/reviews', findReviewsByUser);
    app.put('/api/albums/:aid/reviews/:rid', updateReview);
    app.delete('/api/albums/:aid/reviews/:rid', deleteReview);
}
