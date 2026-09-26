// Ubah, tambah, atau hapus baris sesuai keahlianmu.
const keahlian = [
  { nama: 'SQL', ket: 'Query dan analisis data' },
  { nama: 'Python', ket: 'Dasar data science' },
  { nama: 'React', ket: 'Antarmuka web' }
]

function Keahlian() {
  return (
    <section className="bagian" id="keahlian">
      <h2>Keahlian</h2>
      <ul className="daftar">
        {keahlian.map((k) => (
          <li key={k.nama}>
            <div className="baris">
              <span className="nama">{k.nama}</span>
              <span className="ket">{k.ket}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Keahlian