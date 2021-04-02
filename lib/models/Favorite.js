const pool = require('../utils/pool');

module.exports = class Favorite {
    static async insert(favorite) {
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
            favorite.item_id,
            favorite.title,
            favorite.images,
            favorite.slug,  
            favorite.url,
            favorite.bitly_url,
            favorite.embed_url,
            favorite.item_username,
            favorite.source,
            favorite.source_post_url,
            favorite.rating,
            favorite.collection,    
            favorite.user_id
        ])
    
        return data.rows[0];

    }
}
