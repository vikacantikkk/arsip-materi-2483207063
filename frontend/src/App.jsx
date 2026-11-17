
import { useState, useEffect } from 'react';
import './App.css';
import DaftarMateri from './components/DaftarMateri';
import { ambilMateri } from './api/materi';

function App() {
  const [materi, setMateri] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [percobaan, setPercobaan] = useState(0);

  useEffect(() => {
    let masihAktif = true;

    async function muatMateri() {
      setLoading(true);
      setError('');

      try {
        const data = await ambilMateri();

        if (masihAktif) {
          setMateri(data);
        }
      } catch (err) {
        if (masihAktif) {
          setError(err.message);
        }
      } finally {
        if (masihAktif) {
          setLoading(false);
        }
      }
    }

    muatMateri();
d
    return () => {
      masihAktif = false;
    };
  }, [percobaan]);

  function cobaLagi() {
    setPercobaan((nilai) => nilai + 1);
  }

  return (
    <div>
      <h1>ArsipMateri</h1>

      {loading && <p>Memuat…</p>}

      {!loading && error && (
        <div>
          <p>{error}</p>
          <button onClick={cobaLagi}>Coba lagi</button>
        </div>
      )}

      {!loading && !error && materi.length === 0 && (
        <p>Belum ada materi</p>
      )}

      {!loading && !error && materi.length > 0 && (
        <DaftarMateri materi={materi} />
      )}
    </div>
  );
}

export default App;
