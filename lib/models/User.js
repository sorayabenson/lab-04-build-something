const pool = require('../utils/pool');

module.exports = class User {
    id;
    email;
    hash;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.hash = row.hash;
    }

    static async insert(user) {
        const {
            rows
        } = await pool.query(`
            INSERT INTO users(
                email,
                hash)
            VALUES ($1, $2)
            RETURNING *`,
            [
                user.name,
                user.hash
            ]);

        return new User(rows[0]);

    }
}