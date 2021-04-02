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
}
