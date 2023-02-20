import Button from 'components/Button/Button';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import React from 'react';
import { CustomGallery } from './ImageGallery.styled';

const ImageGallery = ({ images, loadMore, endList, openPopup }) => {
  if (!images.length) {
    return <h1>Sorry I`m not found results... Try again...</h1>;
  }
  return (
    <CustomGallery>
      {images.map(el => (
        <ImageGalleryItem
          key={el.id}
          openPopup={openPopup}
          webformatURL={el.webformatURL}
          largeImageURL={el.largeImageURL}
        />
      ))}
      <Button loadMore={loadMore} endList={endList} />
    </CustomGallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  loadMore: PropTypes.func.isRequired,
  endList: PropTypes.bool.isRequired,
  openPopup: PropTypes.func.isRequired,
};

export default ImageGallery;
