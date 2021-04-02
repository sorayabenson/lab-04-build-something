const pool = require('../utils/pool');

module.exports = class Collection {
    static async insert(body, userId) {
        const data = await pool.query(`
            INSERT INTO collections (
                name,
                user_id
            )
            VALUES ($1, $2)
            RETURNING *`,
            [
                body.name,
                userId
            ]);

            return data.rows[0];
    }

    static async getCollections(userId) {
        const data = await pool.query(`
            SELECT * FROM collections
            WHERE user_id=$1`,
            [userId])

            return data.rows;
    }

    static async getCollectionById(id) {
        const data = await pool.query(`
        SELECT 
            name AS collection_name, favorites.id AS favorite_id, item_id, title, images, slug, url, bitly_url, embed_url, item_username, source, source_post_url, rating, collections.user_id FROM collections
        INNER JOIN favorites
            ON collections.id = favorites.collection_id
        WHERE collections.id=$1`,
        [id]);

        return data.rows;
    }
}
