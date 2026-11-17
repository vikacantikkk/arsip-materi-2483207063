
function DaftarMateri({ materi }) {
  return (
    <div className="daftar-materi">
      {materi.map((item) => (
        <div className="materi-item" key={item.id}>
          <h3>{item.judul}</h3>

          <p>Mata Kuliah: {item.mataKuliah}</p>

          <p>Pertemuan {item.pertemuan}</p>

          {item.tautan !== null && (
            <a href={item.tautan} target="_blank" rel="noreferrer">
              Buka
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default DaftarMateri;
