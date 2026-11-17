const API_URL = import.meta.env.VITE_API_URL;

export async function ambilMateri() {
  try {
    const res = await fetch(`${API_URL}/materi`);

    if (!res.ok) {
      throw new Error(`Gagal mengambil data materi. Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error('Tidak dapat terhubung ke server API. Periksa koneksi atau pastikan server berjalan.');
    }

    throw error;
  }
}