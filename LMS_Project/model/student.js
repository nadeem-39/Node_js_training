const pool = require("../config/db_config");

class Students {
  static async findAll() {
    let sql = `SELECT * FROM students`;

    const [data] = await pool.execute(sql);
    return data;
  }

  static async AddOne(library_id, student_name, student_age, email_id) {
    let sql = `
            INSERT INTO Students
            (library_id ,student_name, student_age, email_id, created_at)
            VALUES (?, ?, ?,?, NOW())
            `;
    await pool.execute(sql, [library_id, student_name, student_age, email_id]);
  }
}

module.exports = Students;
