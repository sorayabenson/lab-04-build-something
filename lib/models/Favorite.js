const pool = require('../utils/pool');

module.exports = class Favorite {
    static async insert(body, id) {
        const data = await pool.query(`
        INSERT INTO favorites (
            item_id,
            title,
            images,
            slug,  
            url,
            bitly_url,
            embed_url,
            item_username,
            source,
            source_post_url,
            rating,
            collection,    
            user_id
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
        RETURNING *`,
        [
            body.item_id,
            body.title,
            body.images,
            body.slug,  
            body.url,
            body.bitly_url,
            body.embed_url,
            body.item_username,
            body.source,
            body.source_post_url,
            body.rating,
            body.collection,    
            id
        ])
    
        return data.rows[0];

    }

    static async getUserFaves(req) {
        const data = await pool.query(`
            SELECT * FROM favorites
            WHERE user_id=$1`,
            [req.userId]);

        return data.rows;
    }

    static async getById(id) {
        const data = await pool.query(`
        SELECT * FROM favorites
        WHERE id=$1`,
        [id]);

        return data.rows[0];
    }

    static async updateById(body, id) {
        const data = await pool.query(`
            UPDATE favorites
            SET collection=$1
            WHERE id=$2
            RETURNING *`,
            [
                body.collection,
                id
            ])

        return data.rows[0];
    }

    static async deleteById(id) {
        const data = await pool.query(`
        DELETE FROM favorites
        WHERE id=$1
        RETURNING *`,
        [id]);

        return data.rows[0];
    }
}
