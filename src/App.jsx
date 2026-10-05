import Hero from './components/Hero'
import Tentang from './components/Tentang'
import Keahlian from './components/Keahlian'
import Proyek from './components/Proyek'
import Galeri from './components/Galeri'
import Kontak from './components/Kontak'
import './app.css'

function App() {
  return (
    <>
      <ScrollKeAtas />
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang" element={<TentangPage />} />
        <Route path="/keahlian" element={<KeahlianPage />} />
        <Route path="/proyek" element={<ProyekPage />} />
        <Route path="/galeri" element={<GaleriPage />} />
        <Route path="/kontak" element={<KontakPage />} />
      </Routes>
      <footer className="footer">
        <p>@2026.</p>
      </footer>
    </>
  )
}

export default App
