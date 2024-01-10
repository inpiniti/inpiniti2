import { createPool } from "mysql2/promise";

export default defineEventHandler(async (event) => {
  return fetchBooks();
});

// TABLE `oricon`.Books 에 저장된 데이터 조회

const pool = createPool({
  host: "110.46.192.54",
  user: "root",
  password: "!Wjd53850",
  database: "oricon",
});

export async function fetchBooks() {
  const [rows] = await pool.query("SELECT * FROM Books");
  return rows;
}
