const pool = require("../config/db_config");

class Books {
  static async findAll() {
    let sql = `SELECT * FROM book_details`;
    try {
      const [data] = await pool.execute(sql);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
  static async findById(id) {
    let sql = `SELECT * FROM book_details where id = ${id}`;
    try {
      const [data] = await pool.execute(sql);
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  static async createBook(id, name, author, price, pages) {
    let sql = `INSERT INTO book_details(id, name, author, price, pages)VALUES (?, ?, ?, ?, ?)`;

    try {
      const [data] = await pool.execute(sql, [
        id,
        `${name}`,
        `${author}`,
        price,
        pages,
      ]);
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  static async findAndUpdate(id, name, author, price, pages) {
    let sql = `Update book_details 
    set 
        name = ?,
        author = ?,
        price = ?,
        pages = ?
    WHERE id = ?`;

    try {
      const [data] = await pool.execute(sql, [
        `${name}`,
        `${author}`,
        price,
        pages,
        id,
      ]);

      console.log(data);

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  static async findAndDelete(id) {
    let sql = `Delete from book_details where id = ${id}`;

    try {
      const [data] = await pool.execute(sql);

      console.log(data);

      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Books;
