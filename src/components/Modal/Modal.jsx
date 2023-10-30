import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

class Modal extends Component {
  lightbox = null;

  componentDidMount() {
    this.lightbox = basicLightbox.create(`
      <div class="modal">
        <img src="${this.props.largeImageURL}" alt="${this.props.tags}">
      </div>
    `);
  }

  componentWillUnmount() {
    this.lightbox && this.lightbox.close();
  }

  openLightbox = () => {
    this.lightbox && this.lightbox.show();
  }

  handleKeyDown = (event) => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  }

  render() {
    const { largeImageURL, tags } = this.props;

    return (
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="modal">
          <img
            src={largeImageURL}
            alt={tags}
            onClick={this.openLightbox}
          />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
