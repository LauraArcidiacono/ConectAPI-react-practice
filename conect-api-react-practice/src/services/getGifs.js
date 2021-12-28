/* eslint-disable consistent-return */
const apiKey = 'kO6SOypKZorPwChPnFZneDPc2etDzzo4&q';

export default function getGifs({ keyword = 'mrs+maisel' } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=25&offset=0&rating=g&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const gifsArray = data.map((image) => {
          const { id, images, title } = image;
          const { url } = images.downsized_medium;
          return { id, title, url };
        });
        return gifsArray;
      }
    });
}
