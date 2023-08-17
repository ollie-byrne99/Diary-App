const db = require('../database/connect')

class Diary {

    constructor ({ diary_id, diary_name, diary_text, category}) {
        this.id = diary_id;
        this.name = diary_name;
        this.text = diary_text;
        this.category = category;
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
        const { name: diary_name, text: diary_text} = data;
    
        const response = await db.query('INSERT INTO diaries (diary_name, diary_text, diary_category) VALUES ($1, $2, $3) RETURNING *;', [diary_name, diary_text, this.category]);
    
        return new Diary(response.rows[0]);
    }

    async update(data) {
        const { name: diary_name} = data
        const response = await db.query("UPDATE diaries SET diary_name = $1 WHERE diary_id = $2 RETURNING *", [diary_name, this.id])
        if (response.rows.length != 1) {
            throw new Error("Unable to update diary name.")
        }
        return new Diary(response.rows[0]);
    }

    static async deleteById(id) {
        try {
            await db.query("DELETE FROM diaries WHERE diary_id = $1", [id]);
            return { success: true, message: 'Diary deleted successfully.'} 
        } catch (error) {
            throw new Error('This id does not match an entry')
        }
    }

}

module.exports = Diary;
