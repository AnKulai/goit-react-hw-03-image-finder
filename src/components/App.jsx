import { Component } from 'react';
import PixabayApi from 'service/pixabayAPI';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import Section from './Section/Section';

class App extends Component {
  pixabayApi = new PixabayApi();

  state = {
    showDetails: false,
    imgList: null,
    isLoading: false,
    error: null,
    endOfList: false,
    popupOpen: false,
    popupImg: null,
  };

  fetchImages = async () => {
    try {
      this.pixabayApi.setDefaultPage();
      this.setState({ isLoading: true });
      const { hits, totalHits } = await this.pixabayApi.fetchImage();
      this.setState({ endOfList: this.checkEndPage(totalHits), imgList: hits });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  fetchSearchImages = async query => {
    try {
      console.log(`main`);
      this.pixabayApi.setQuery(query);
      this.pixabayApi.setDefaultPage();
      const { hits, totalHits } = await this.pixabayApi.fetchImage();
      this.setState({ endOfList: this.checkEndPage(totalHits), imgList: hits });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  fetchMoreImages = async () => {
    try {
      this.pixabayApi.incrementPage();
      this.setState({ isLoading: true });
      const { hits, totalHits } = await this.pixabayApi.fetchImage();
      this.setState({
        endOfList: this.checkEndPage(totalHits),
        imgList: [...this.state.imgList, ...hits],
      });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  openPopup = url => {
    this.setState({ popupImg: url }, () => this.setState({ popupOpen: true }));
  };

  handleClose = event => {
    if (event.keyCode === 27) {
      if (this.state.popupOpen) this.setState({ popupOpen: false });
    }
    if (this.state.popupOpen && event.target.tagName !== `IMG`) {
      this.setState({ popupOpen: false });
    }
  };

  componentDidMount() {
    this.fetchImages();
    document.addEventListener('keydown', this.handleClose);
    document.addEventListener('click', this.handleClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleClose);
    document.removeEventListener('click', this.handleClose);
  }

  checkEndPage = totalHits => {
    const countOfPages =
      totalHits / this.pixabayApi.searchParams.params.per_page;
    return countOfPages < this.pixabayApi.searchParams.params.page;
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.fetchSearchImages} />
        <Section>
          {this.state.imgList != null ? (
            <ImageGallery
              images={this.state.imgList}
              loadMore={this.fetchMoreImages}
              openPopup={this.openPopup}
              endList={this.state.endOfList}
            />
          ) : (
            <Loader />
          )}
        </Section>
        {this.state.popupOpen && <Modal url={this.state.popupImg} />}
      </>
    );
  }
}

export default App;
