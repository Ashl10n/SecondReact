// Ganti placeholder dengan proyek milikmu.
const proyek = [
  { nama: 'Program Spotify dinamis (C)', ket: 'Sebuah program yang berisikan rancangan pembuatan spotify untuk dasar algoritma', tahun: '2025' },
  { nama: 'Data Mining: Online Gambling Disorder', ket: 'Sebuah projek Data mining dalam ajang Gemastik', tahun: '2026' },
 
]

function Proyek() {
  return (
    <section className="bagian" id="proyek">
      <h2>Proyek</h2>
      <ul className="daftar">
        {proyek.map((p, i) => (
          <li key={i}>
            <div className="baris">
              <span className="nama">{p.nama}</span>
              <span className="ket">{p.ket}</span>
              <span className="ket">{p.tahun}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Proyek