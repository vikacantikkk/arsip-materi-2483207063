import { semua as ambilSemua } from './materi.repository.js';

export async function semua() {
  const rows = await ambilSemua();

  return rows.map((row) => ({
    id: row.id,
    judul: row.judul,
    mataKuliah: row.mata_kuliah,
    pertemuan: row.pertemuan,
    tautan: row.tautan ?? null,
    dibuat: row.dibuat,
  }));
}