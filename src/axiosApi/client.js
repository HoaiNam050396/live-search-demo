import axios from 'axios';
import Raven from 'raven-js';
// import store from '../store/index';

/**
 * Create a new Axios client instance
 * @see https://github.com/mzabriskie/axios#creating-an-instance
 */
const getClient = (baseUrl = null) => {

  const options = {
    baseURL: baseUrl
  };

//   if (store.getters['users/isAuthenticated']) {
//     options.headers = {
//       Authorization: `Bearer ${store.getters['users/accessToken']}`,
//     };
//   }

  const client = axios.create(options);

  // Add a request interceptor
  client.interceptors.request.use(
    requestConfig => requestConfig,
    (requestError) => {
      Raven.captureException(requestError);

      return Promise.reject(requestError);
    },
  );

  // Add a response interceptor
  client.interceptors.response.use(
    response => response,
    (error) => {
      if (error.response.status >= 500) {
        Raven.captureException(error);
      }

      return Promise.reject(error);
    },
  );

  return client;
};

class ApiClient {
  constructor(baseUrl = null) {
    this.client = getClient(baseUrl);
  }

  get(url, conf = {}) {
    return this.client.get(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  delete(url, conf = {}) {
    return this.client.delete(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  head(url, conf = {}) {
    return this.client.head(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  options(url, conf = {}) {
    return this.client.options(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  post(url, data = {}, conf = {}) {
    return this.client.post(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  put(url, data = {}, conf = {}) {
    return this.client.put(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  patch(url, data = {}, conf = {}) {
    return this.client.patch(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }
}

export { ApiClient };

/**
 * Base HTTP Client
 */

