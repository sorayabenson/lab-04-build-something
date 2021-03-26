const pool = require('../utils/pool');

module.exports = class Contact {
    id;
    name;
    phoneNumber;
    userId;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.phoneNumber = row.phoneNumber;
        this.userId = row.userId;
    }

    static async insert(contact) {
        const {
            rows
        } = await pool.query(`
            INSERT INTO contacts(
                name,
                phoneNumber,
                userId)
            VALUES ($1, $2, $3)
            RETURNING *`,
            [
                contact.name,
                contact.image,
                contact.catchphrase
            ]);

        return new Contact(rows[0]);

    }
}