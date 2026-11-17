
import pool from './db.js';

try {
  const [rows] = await pool.query(
    'SELECT VERSION() AS versi, DATABASE() AS db'
  );

  console.log('Koneksi database berhasil!');
  console.log('Versi MySQL:', rows[0].versi);
  console.log('Nama database:', rows[0].db);
  console.log('Nama pengguna:', process.env.DB_USER);

} catch (error) {
  console.error('Koneksi database gagal!');
  console.error('Kode error:', error.code);
  console.error('Pesan:', error.message);
  process.exitCode = 1;

} finally {
  await pool.end();
}
