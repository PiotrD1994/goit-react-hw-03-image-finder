import { Component } from 'react';
import PropTypes from 'prop-types';



class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
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

    const {largeImageURL, tags} = this.props
    return (
      <div className='Overlay' onClick={this.handleBackdropClick}>
        <div className='modal'>
          <img
            src={largeImageURL}
            alt={tags}
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
