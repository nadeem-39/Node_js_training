const pool = require("../config/db-config");

class Books {
  static async findAll() {
    let sql = `SELECT * FROM books`;

    const [data] = await pool.execute(sql);
    return data;
  }

  static async findOne(id) {
    let sql = `SELECT * FROM books where id = ${id}`;

    const [data] = await pool.execute(sql);
    return data;
  }

  static async findAndUpdateOne(id, book_name, author_name, isbn, file) {
    let sql = `SELECT * FROM books where id = ${id} LIMIT 1`;
    const [data] = await pool.execute(sql);
    if (data.length == 0) throw new Error("Can not find book");

    if (!file) file = data[0].file;

    sql = `
        UPDATE books
        SET
            book_name = ?,
            author_name = ?,
            isbn = ?,
            modified_at = NOW(),
            file=?
        WHERE id = ?
    `;
    const [updatedData] = await pool.execute(sql, [
      book_name,
      author_name,
      isbn,
      file,
      id,
    ]);
    return updatedData;
  }

  static async AddOne(book_name, author_name, isbn, file) {
    let sql = `
            INSERT INTO books
            (book_name, author_name, isbn, created_at, modified_at,file)
            VALUES (?, ?, ?, NOW(), NOW(),?)
            `;
    await pool.execute(sql, [book_name, author_name, isbn, file]);
  }
  static async findAndDeleteOne(id) {
    let sql = `SELECT * FROM books where id = ${id}`;
    const [data] = await pool.execute(sql);
    if (data.length == 0) throw new Error("Can not find book");
    sql = `Delete from books where id = ${id}`;
    await pool.execute(sql);
  }
}

module.exports = Books;
