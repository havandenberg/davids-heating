import * as R from 'ramda';
import * as React from 'react';
import reviews from '../content/reviews';
import l from '../styles/layout';
import th from '../styles/theme';
import ty from '../styles/typography';
import { CustomerReview } from '../types';
import { getAverageRating, sortReviews } from '../utils';
import ReviewStars from './ReviewStars';

const Reviews = () => {
  const averageRating = getAverageRating(reviews);
  const sortedReviews = sortReviews(reviews);
  return (
    <div id="reviews-end">
      <l.Flex
        flexDirection={['column', 'column', 'row']}
        mt={th.spacing.xl}
        spaceBetween>
        <ty.H1
          id="reviews"
          mr={[0, 0, th.spacing.xl]}
          width={['100%', '100%', 'auto']}>
          Customer Reviews
        </ty.H1>
        <l.Space height={[th.spacing.l, th.spacing.l, 0]} />
        <l.FlexColumn justifyContent={['center', 'flex-end', 'flex-end']}>
          <l.Flex columnOnMobile mt={[0, 0, th.spacing.m]}>
            <ty.Text bold mr={th.spacing.m}>
              Average rating:
            </ty.Text>
            <l.Space height={[th.spacing.m, 0, 0]} />
            <ReviewStars value={averageRating} />
          </l.Flex>
          <l.Space height={th.spacing.s} />
          <l.Flex columnOnMobile>
            <ty.Text bold mr={th.spacing.m}>
              {averageRating}/5 stars | {reviews.length} reviews
            </ty.Text>
          </l.Flex>
        </l.FlexColumn>
      </l.Flex>
      <l.Space height={[th.spacing.l, th.spacing.xl, th.spacing.l]} />
      {sortedReviews.map((review: CustomerReview, index: number) => (
        <l.Space
          key={`review-${index}`}
          mb={[th.spacing.l, th.spacing.xl, th.spacing.xl]}>
          <l.Flex>
            <ReviewStars value={review.stars} />
            <ty.Text large> | {review.date}</ty.Text>
          </l.Flex>
          <l.Space height={th.spacing.sm} />
          <l.Flex>
            <ty.Text bold>
              Review by <l.SecondaryColor>{review.name}</l.SecondaryColor>
            </ty.Text>
            {!R.isEmpty(review.location) && (
              <ty.Text bold>
                &nbsp;in <l.SecondaryColor>{review.location}</l.SecondaryColor>
              </ty.Text>
            )}
          </l.Flex>
          <l.Space height={th.spacing.sm} />
          <ty.Text bold>Project: {review.project}</ty.Text>
          <l.Space height={th.spacing.sm} />
          <ty.Text>"{review.description}"</ty.Text>
        </l.Space>
      ))}
    </div>
  );
};

export default Reviews;
