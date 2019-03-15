import * as R from 'ramda';
import { CustomerReview } from '../types';

export const getAverageRating = (reviews: CustomerReview[]) =>
  parseFloat(
    Math.round(R.sum(R.pluck('stars', reviews)) / reviews.length).toFixed(1),
  );

export const sortReviews: (
  reviews: CustomerReview[],
) => CustomerReview[] = reviews =>
  R.sortBy(
    (review: CustomerReview) => new Date(review.date),
    reviews,
  ).reverse();
