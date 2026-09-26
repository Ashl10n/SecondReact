import FotoPlaceholder from './Fotoplaceholder';
import galeri1 from '../assets/image.png';
import galeri2 from '../assets/galeri3.jpeg';
import galeri3 from '../assets/galeri1.jpeg';

// Ganti `src: null` dengan gambar hasil import, contoh:
// import foto1 from '../assets/galeri-1.jpg'  ->  src: foto1
const foto = [
  { id: 1, src: galeri1, alt: 'Galeri 1', label: 'Galeri 1', keterangan: 'Tulis keterangan foto pertama' },
  { id: 2, src: galeri2, alt: 'Galeri 2', label: 'Galeri 2', keterangan: 'Tulis keterangan foto kedua' },
  { id: 3, src: galeri3, alt: 'Galeri 3', label: 'Galeri 3', keterangan: 'Tulis keterangan foto ketiga' },
]

function Galeri() {
  return (
    <section className="bagian galeri" id="galeri">
      <h2>Galeri</h2>
      <div className="galeri-grid">
        {foto.map((f) => (
          <div className="galeri-item" key={f.id}>
            <FotoPlaceholder src={f.src} alt={f.alt} label={f.label} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Galeri