import reviewsModel from './reviews-model.js';
export const findReviews = () => reviewsModel.find();
export const createReview = (newReview) => reviewsModel.create(newReview);
export const deleteReview = (rid) => reviewsModel.findOneAndDelete({_id: rid});
export const updateReview = (rid, newReview) => reviewsModel.findOneAndUpdate({_id: rid}, {$set: newReview}, {new:true})
