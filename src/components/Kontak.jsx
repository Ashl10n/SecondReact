// Ganti `href` dan `nilai` dengan milikmu.
const kontak = [
  { nama: 'Email', nilai: 'lionelsihotang07@gmail.com', href: 'lionelsihotang07@gmail.com' },
  { nama: 'GitHub', nilai: 'github.com/ashl10n', href: 'github.com/ashl10n' },
  { nama: 'Instagram', nilai: 'ashlioo_', href: 'instagram.com/ashlioo_' },
]

function Kontak() {
  return (
    <section className="bagian" id="kontak">
      <h2>Kontak</h2>
      <ul className="daftar">
        {kontak.map((k) => (
          <li key={k.nama}>
            <a className="baris" href={k.href}>
              <span className="nama">{k.nama}</span>
              <span className="ket">{k.nilai}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Kontak