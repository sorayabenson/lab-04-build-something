const Gif = require('../models/Gif');
const { formatGifs } = require('../utils/giphy');

module.exports = class GifService {
    static async loadTrending() {
        const data = await Gif.getTrending();
        const shapedData = formatGifs(data);

        return shapedData;
    }
}