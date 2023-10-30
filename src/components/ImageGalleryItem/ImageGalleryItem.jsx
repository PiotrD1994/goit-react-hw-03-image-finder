import React, {Component} from "react";
import PropTypes from 'prop-types';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import css from './ImageGalleryItem.module.css'

class ImageGalleryItem extends Component {
 lightbox = null


  componentDidMount() {
    this.lightbox = basicLightbox.create(`
      <div class="modal">
        <img src="${this.props.image.largeImageURL}" alt="${this.props.image.tags}">
      </div>
    `);
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    this.lightbox && this.lightbox.close();
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  openLightbox = () => {
    this.lightbox && this.lightbox.show();
  }
 handleKeyDown = (event) => {
    if (event.code === 'Escape') {
      this.lightbox && this.lightbox.close();
    }
  }

  render() {
    const {image} = this.props
    return (
      <div>
        <li className={css.item}>
          <img className={css.image} src={image.webformatURL} alt={image.tags} onClick={this.openLightbox}/>
        </li>
      </div>
    )
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;