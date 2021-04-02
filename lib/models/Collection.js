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

}
