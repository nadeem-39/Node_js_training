const pool = require("../config/db_config");

class Users {
  static async findByEmail(email) {
    let sql = `SELECT * FROM users where email = ?`;
    try {
      const [data] = await pool.execute(sql, [`${email}`]);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Users;
