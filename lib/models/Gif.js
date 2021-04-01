const { default: axios } = require('axios');
const { formatGifs, shapeOneGif } = require('../utils/giphy');

module.exports = class Gif {
    static async getTrending() {
        const { data } = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}`);

        return data.data;
    }

    static async getById(id) {
        const { data } = await axios.get(`https://api.giphy.com/v1/gifs/${id}?api_key=${process.env.GIPHY_API_KEY}`);

        return data.data;
    }

    static async getRandom(query) {
        const { data } = await axios.get(`https://api.giphy.com/v1/gifs/random?tag=${query}&api_key=${process.env.GIPHY_API_KEY}`);

        return data.data;
    }

    static async getSearch(query) {
        const { data } = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${process.env.GIPHY_API_KEY}`);

        return data.data;
    }
}