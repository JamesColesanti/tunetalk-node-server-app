import reviewsModel from './reviews-model.js';
export const findReviews = () => reviewsModel.find();
export const createReview = (aid) => reviewsModel.create(aid);
export const deleteReview = (rid) => reviewsModel.deleteOne({_id: rid});
export const updateReview = (rid, newReview) => reviewsModel.updateOne({_id: rid}, {$set: review})