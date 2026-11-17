export function tidakDitemukan(req, res) {
  res.status(404).json({
    error: 'Rute tidak ditemukan'
  });
}

export function penangananError(err, req, res, next) {
  console.error(err);

  res.status(500).json({
    error: 'Terjadi kesalahan pada server'
  });
}