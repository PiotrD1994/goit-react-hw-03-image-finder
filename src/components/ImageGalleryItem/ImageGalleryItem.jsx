import React from "react";
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, alt, onImageClick }) => {
  return (
    <li className="gallery-item">
      <img src={image.webformatURL} alt={alt} onClick={() => onImageClick(image)} />
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