const apiKey = 'kO6SOypKZorPwChPnFZneDPc2etDzzo4&q';

export default function getGifs({ keyWord = 'mrs=maisel' } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyWord}&limit=40&offset=0&rating=g&lang=en`;

  return (
    fetch(apiURL)
      .then((res) => res.json())
      .then((response) => {
        const { data = [] } = response;
        const gifsArray = data.map((image) => image.images.downsized_medium.url);
        return gifsArray;
      })
  );
}
