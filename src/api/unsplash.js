// import axios from 'axios';

// const API_KEY = 'R7gqvAPcyvddQAyXG-aik_CGa4YAAvOrT0OAc1mTh3Y';

// export const searchImages = async (query, page = 1) => {
//   const response = await axios.get('https://api.unsplash.com/search/photos', {
//     params: { query, page, per_page: 12 },
//     headers: { Authorization: `Client-ID ${API_KEY}` },
//   });
//   return response.data;
// };

import axios from 'axios';

const ACCESS_KEY = 'R7gqvAPcyvddQAyXG-aik_CGa4YAAvOrT0OAc1mTh3Y';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export const searchImages = async (query, page = 1) => {
  const response = await instance.get('/search/photos', {
    params: {
      query,
      page,
      per_page: 12,
    },
  });
  return response.data;
};
