import FotoPlaceholder from './Fotoplaceholder';
import galeri2 from '../assets/galeri2.jpeg';
// Kalau sudah punya foto, taruh di src/assets lalu aktifkan baris ini:
// import fotoProfil from '../assets/profil.jpg'

function Hero() {
  return (
    <header className="hero">
      <div className="hero-isi">
        <div className="hero-teks">
          <p className="sapaan">Halo, saya</p>
          <h1>Lionel <br /> Ashley <br />Sihotang</h1>
          <p className="peran">
            Mahasiswa Pendidikan Ilmu Komputer semester 3 di Universitas Pendidikan Indonesia.
          </p>
          <a className="tombol" href="#kontak">
            Hubungi saya
          </a>
        </div>

        <FotoPlaceholder
          className="foto-profil"
          src={galeri2}
          alt="Foto profil"
          label="Foto profil"
        />
      </div>
    </header>
  )
}

export default Hero