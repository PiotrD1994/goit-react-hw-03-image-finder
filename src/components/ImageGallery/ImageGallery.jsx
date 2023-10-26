import React from "react";
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import PropTypes from 'prop-types';

const ImageGallery = ({images, onImageClick}) => {
    return (
        <ul className="gallery">
        {images.map((image) => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onImageClick={onImageClick}
          />
        ))}
      </ul>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number.isRequired })
    ).isRequired,
  };

  export default ImageGallery;