const { default: axios } = require('axios');
const { formatGifs } = require('../utils/giphy');

module.exports = class Gif {
    static async getTrending() {
        const { data } = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}`);

        return data.data;
    }
}