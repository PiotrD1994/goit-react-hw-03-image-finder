import React from "react";
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ alt, image, bigPictrue, onImageClick }) => {
  return (
    <li className="gallery-item" onClick={() => onImageClick({bigPictrueURL: bigPictrue, alt: alt})}>
      <img src={image} alt={alt} width="250"/>
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;