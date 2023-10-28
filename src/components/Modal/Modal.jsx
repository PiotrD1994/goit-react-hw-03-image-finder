import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root')

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }
    handleKeyDown = (event) => {
        if (event.code === 'Escape') {
            this.props.onModalClose()
        }
    }

    hadnelBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            this.props.onModalClose()
        }
    }
    render() {
        return createPortal(
          <div className='Overlay' onClick={this.handleBackdropClick}>
            <div className='modal'>
              <img
                src={this.props.largeImageUrl}
                alt={this.props.largeImage.alt}
              />
            </div>
          </div>,
          modalRoot
        );
      }
}

Modal.propTypes = {
    largeImage: PropTypes.shape({
      largeUrl: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    onModalClose: PropTypes.func.isRequired,
  };

  export default Modal
