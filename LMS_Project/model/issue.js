const pool = require("../config/db-config");

class Issue {
  static async findAll() {
    let sql = `SELECT 
                ib.id, b.book_name, s.student_name, ib.issue_date, ib.return_date, ib.status 
                FROM
                books b join issue_books ib on b.id = ib.book_id 
                join students s on s.library_id = ib.student_library_id`;

    const [data] = await pool.execute(sql);
    return data;
  }
  static async AddOne(book_id, student_library_id) {
    let sql = `
            INSERT INTO issue_books
            (student_library_id, book_id, issue_date, return_date, status)
            VALUES (?,?, Now(), null, "ISSUED")
            `;
    await pool.execute(sql, [student_library_id, book_id]);
  }
}

module.exports = Issue;
