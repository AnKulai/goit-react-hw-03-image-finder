import React from 'react';
import { CustomBtnWrapper } from './Button.styled';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';

const Button = ({ loadMore, endList }) => {
  const handleLoadMore = () => {
    loadMore();
  };

  const handleClick = throttle(handleLoadMore, 1000);

  if (endList) return null;

  return (
    <CustomBtnWrapper>
      <button onClick={handleClick}>Load More</button>
    </CustomBtnWrapper>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
  endList: PropTypes.bool.isRequired,
};

export default Button;
