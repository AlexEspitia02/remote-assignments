import mysql from 'mysql2';
import dotenv from  'dotenv';
dotenv.config();

const pool = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise();

export async function getUser(id) {
  const [rows] = await pool.query(`
  SELECT * 
  FROM user 
  WHERE id = ?
  `, [id]);
  return rows[0];
}

export async function createUser(email, userPassword) {
  const [result] = await pool.query(`
  INSERT INTO user (email, userPassword) 
  VALUES (?, ?)
  `, [email, userPassword]);
  const id = result.insertId
  return getUser(id);
}

export async function checkEmailExists(email) {
  const [rows] = await pool.query(`
      SELECT 1 
      FROM user 
      WHERE email = ?
  `, [email]);
  return rows.length > 0;
}

export async function signIn(email, password) {
  const [rows] = await pool.query(`
  SELECT userPassword 
  FROM user 
  WHERE email = ?
  `, [email]);

  if (rows.length > 0) {
      const user = rows[0];
      return password === user.userPassword;
  } else {
      return false;
  }
}