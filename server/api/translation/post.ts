import { createPool } from "mysql2/promise";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    await saveToDatabase(JSON.parse(body));
    return true;
  } catch (error) {
    return error;
  }
});

const pool = createPool({
  host: "110.46.192.54",
  user: "root",
  password: "!Wjd53850",
  database: "oricon",
});

async function saveToDatabase(
  data: {
    jp: string;
    kr: string;
  }[]
) {
  const promises = data.map((item) => {
    return pool.query(
      `INSERT INTO translation (jp, kr) VALUES (?, ?)
        ON DUPLICATE KEY UPDATE kr = VALUES(kr)`,
      [item.jp, item.kr]
    );
  });

  await Promise.all(promises);
}

// jp 컬럼을 고유 키로 설정하는 SQL 명령입니다:
// ALTER TABLE translation ADD UNIQUE (jp);
