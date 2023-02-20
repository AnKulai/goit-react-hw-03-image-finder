import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImageURL, openPopup }) => {
  return (
    <li onClick={() => openPopup(largeImageURL)}>
      <img width="100%" height="100%" src={webformatURL} alt="photo" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openPopup: PropTypes.func.isRequired,
};

export default ImageGalleryItem;


