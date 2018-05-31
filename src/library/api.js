import ezFetch from 'ez-fetch';

const API_URL = 'https://pure-bastion-22517.herokuapp.com/api/v1/products';

export default {
  getProducts() {
    return ezFetch.get(API_URL);
  },
  getProduct(id) {
    return ezFetch.get(`${API_URL}/${id}`);
  },
};
