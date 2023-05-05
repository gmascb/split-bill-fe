import axios from 'axios';

class HttpService {
  async get(endpoint) {
    return axios.get(endpoint);
  }

  async post(endpoint, data) {
    return axios.post(endpoint, data);
  }

  async put(endpoint, data) {
    return axios.put(endpoint, data);
  }

  async delete(endpoint) {
    return axios.delete(endpoint);
  }
}

export default new HttpService();
