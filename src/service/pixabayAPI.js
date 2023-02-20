import axios from 'axios';
import config from 'configuration/config';

export default class PixabayApi {
  constructor() {
    this.searchParams = {
      params: {
        key: config.API_KEY,
        q: this.query,
        image_type: `photo`,
        orientation: `horizontal`,
        safesearch: true,
        per_page: 12,
        page: 1,
      },
    };
  }

  setQuery = query => {
    this.searchParams.params.q = query;
  };

  setDefaultPage = () => {
    this.searchParams.params.page = 1;
  };

  incrementPage = () => {
    this.searchParams.params.page++;
  };

  fetchImage = async () => {
    try {
      const { data } = await axios.get(`${config.BASE_URL}`, this.searchParams);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}
