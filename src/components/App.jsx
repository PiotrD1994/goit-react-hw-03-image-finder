import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";
import Loader from "./Loader/Loader";
import fetchImages from "./Api/Api";

class App extends Component {
  state = {
    query: "",
    images: [],
    page: 1,
    loader: false,
    largeImageURL: null,
    allImages: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        const dataImages = await fetchImages(
          this.state.query,
          this.state.page
        );
        setTimeout(() => {
          this.setState((state) => ({
            images: [...state.images, ...dataImages.hits],
            loader: false,
            allImages: dataImages.totalHits,
          }));
        }, 1000);
      } catch (error) {
        console.log(error);
        this.setState({ loader: false });
      }
    }
  }

  handleSubmit = (currentQuery) => {
    if (this.state.query === currentQuery) {
      return;
    }
    this.setState({
      query: currentQuery,
      images: [],
      page: 1,
      loader: true,
    });
  };

  btnLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
      loader: !prevState.loader,
    }));
  };

  handleImageClick = (newLargeImageURL) => {
    this.setState({ largeImageURL: newLargeImageURL });
  };

  closeImageModal = () => {
    this.setState({ largeImageURL: null });
  };

  render() {
    const { images, largeImageURL, allImages, loader } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 && (
          <div>
            <ImageGallery images={images} onHandleImageClick={this.handleImageClick} />
            {images.length < allImages ? (
              <button onClick={this.btnLoadMore}>Load More</button>
            ) : (
              <p>No more images</p>
            )}
          </div>
        )}
        {loader && <Loader />}
        {largeImageURL && (
          <Modal onCloseImageModal={this.closeImageModal} largeImage={largeImageURL} />
        )}
      </div>
    );
  }
}

export default App;