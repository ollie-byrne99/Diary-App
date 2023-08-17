const db = require('../database/connect')

class Diary {

    constructor ({ diary_id, diary_name, diary_text, category, diary_date}) {
        this.id = diary_id;
        this.name = diary_name;
        this.text = diary_text;
        this.category = category;
        this.date = diary_date;
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM diaries;")
        if (response.rows.length === 0) {
            throw new Error("No diaries available.")
        }
        return response.rows.map(g => new Diary(g))
    }


    static async getOneById(id) {
        const response = await db.query("SELECT * FROM diaries WHERE diary_id = $1", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate diary.")
        }
        return new Diary(response.rows[0]);
    }

    static async create(data) {
        const { name: diary_name, text: diary_text, category: category} = data;
    
        const response = await db.query('INSERT INTO diaries (diary_name, diary_text, category) VALUES ($1, $2, $3) RETURNING *;', [diary_name, diary_text, category]);
    
        return new Diary(response.rows[0]);
    }

    async update(data) {
        const { name: diary_name, text: diary_text, category: category} = data;

        const response = await db.query("UPDATE diaries SET diary_name = $1, diary_text = $2, category = $3 WHERE diary_id = $4 RETURNING *;", [diary_name, diary_text, category, this.id])

        if (response.rows.length != 1) {
            throw new Error("Unable to update diary name.")
        }
        return new Diary(response.rows[0]);
    }

    async deleteById() {
        try {
            await db.query("DELETE FROM diaries WHERE diary_id = $1", [this.id]);
            return { success: true, message: 'Diary deleted successfully.'} 
        } catch (error) {
            throw new Error('This id does not match an entry')
        }
    }

}

module.exports = Diary;
