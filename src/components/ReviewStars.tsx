import * as R from 'ramda';
import * as React from 'react';
import styled from 'react-emotion';
import EmptyStarImg from '../assets/images/empty-star.svg';
import FullStarImg from '../assets/images/full-star.svg';
import HalfStarImg from '../assets/images/half-star.svg';
import l from '../styles/layout';
import th from '../styles/theme';

const MAX_STARS = 5;

const Star = styled(l.Img)({
  height: th.spacing.ml,
  marginRight: th.spacing.m,
  width: th.spacing.ml,
  [th.breakpoints.mobile]: {
    height: th.spacing.m,
    marginRight: th.spacing.sm,
    width: th.spacing.m,
  },
});

const ReviewStars = ({ value }: { value: number }) => {
  const fullStars = value <= 5 ? Math.floor(value) : 5;
  const halfStars = value - fullStars > 0 ? 1 : 0;
  const emptyStars = MAX_STARS - halfStars - fullStars;

  return (
    <l.Flex inline>
      {R.times(
        index => (
          <Star key={`full-${index}`} src={FullStarImg} />
        ),
        fullStars,
      )}
      {R.times(
        index => (
          <Star key={`half-${index}`} src={HalfStarImg} />
        ),
        halfStars,
      )}
      {R.times(
        index => (
          <Star key={`empty-${index}`} src={EmptyStarImg} />
        ),
        emptyStars,
      )}
    </l.Flex>
  );
};

export default ReviewStars;
