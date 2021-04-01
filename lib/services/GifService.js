const Gif = require('../models/Gif');
const { formatGifs, shapeOneGif } = require('../utils/giphy');

module.exports = class GifService {
    static async loadTrending() {
        const data = await Gif.getTrending();
        const shapedData = formatGifs(data);

        return shapedData;
    }

    static async loadById(id) {
        const data = await Gif.getById(id);
        const shapedData = shapeOneGif(data);

        return shapedData;
    }

    static async loadRandom(query) {
        const data = await Gif.getRandom(query);
        const shapedData = shapeOneGif(data);

        return shapedData;
    }
}