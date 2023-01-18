export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=nrfS2ylXFT2Wkn01RO3OenWI6xzBf2oZ&q=${category}&limit=20`;
    const resp = await fetch(url);
    const {data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
       }));

    return gifs;
}