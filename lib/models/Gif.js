const { default: axios } = require('axios');
const { formatGifs } = require('../utils/giphy');

module.exports = class Gif {
    static async getTrending() {
        const { data } = await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=bhscYlUBOI7R8gUtK0l9alwZDASkWHdw');

        return data.data;
    }
}