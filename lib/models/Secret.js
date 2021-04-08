const pool = require('../utils/pool');

module.exports = class Secret {
    static async insert(body) {
        const data = await pool.query(`
        INSERT INTO secrets (
            gif
        )
        VALUES ($1)
        RETURNING *`,
        [
            body.gif
        ])

        console.log(data.rows[0]);
    
        return data.rows[0];
    }
}
