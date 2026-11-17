import pool from '../db.js';

export async function semua() {
  const [rows] = await pool.query(`
    SELECT
      id,
      judul,
      mata_kuliah AS mataKuliah,
      pertemuan,
      tautan,
      dibuat
    FROM materi
    ORDER BY id ASC
  `);

  return rows;
}