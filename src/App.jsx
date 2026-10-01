import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollKeAtas from './components/ScrollKeAtas'
import Beranda from './pages/Beranda'
import TentangPage from './pages/TentangPage'
import KeahlianPage from './pages/KeahlianPage'
import ProyekPage from './pages/ProyekPage'
import GaleriPage from './pages/GaleriPage'
import KontakPage from './pages/KontakPage'
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