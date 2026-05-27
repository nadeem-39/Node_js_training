const pool = require("../config/db-config");

class Users {
  static async findByEmail(email) {
    let sql = `SELECT * FROM users where email = ?`;
    const [data] = await pool.execute(sql, [`${email}`]);
    return data;
  }
}

module.exports = Users;
