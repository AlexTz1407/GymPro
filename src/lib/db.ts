import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

interface QueryParams {
  query: string;
  values?: (string | number)[];
}

export async function query({ query, values = [] }: QueryParams) {
  if (
    !process.env.DB_HOST ||
    !process.env.DB_PORT ||
    !process.env.DB_USER ||
    !process.env.DB_DATABASE
  ) {
    throw new Error(
      "Missing required environment variables for database connection"
    );
  }

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

  const [rows] = await connection.execute(query, values);
  await connection.end();
  return rows;
}
