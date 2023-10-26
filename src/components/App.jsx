import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar"
import ImageGallery from './ImageGallery/ImageGallery'
import Modal from './Modal/Modal'
import Button from './Button/Button'
import Loader from './Loader/Loader'
import axios from 'axios'


class App extends Component {
 state = {
 images: [],
 selectedImages: null,
 loading: false,
 }

 handleSearch = (query) => {
  const apiKey= '39267664-2bc18c2ff9f132c4867ec917a'
  const apiUrl = `https://pixabay.com/api/?q=${query}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;
 axios.get(apiUrl).then((response) => {
  const images = response.data.hits.map((item) => ({
    id: item.id,
    webformatURL: item.webformatURL,
    largeImageURL: item.largeImageURL,
  }))
  this.setState({images, loading: false})
 }).catch((error) => {
  console.error('Error during APi download:', error)
  this.setState({ images:[], loading: false})
 })
}

 handleImageClick = (image) => {
  this.setState({selectedImage: image})
 }

 closeImageModal = () => {
  this.setState({selectedImage:null})
 }

 render () {
  const {images, selectedImage, loading} = this.state

  return (
    <div>
      <Searchbar onSubmit={this.handleSearch}/>
      {loading ? (
        <Loader/>
        ): (<ImageGallery images={images} onImageClick={this.handleImageClick}/>)}
        {selectedImage && (
          <Modal image={selectedImage} onClose={this.closeImageModal}/>
        )}
    </div>
  )
 }
}

export default App