import axios from 'axios';

export default {
  getSuggestions: (query) =>
    axios.get('https://api.savetime.net/v1/client/suggest/item', {
      params: {
        q: query,
        brandId: 24,
        shopId: 1187,
      },
    }),
};
