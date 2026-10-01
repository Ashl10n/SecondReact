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
      <Hero />
      <main>
        <Tentang />
        <Keahlian />
        <Proyek />
        <Galeri />
        <Kontak />
      </main>
      <footer className="footer">
        <p>@2026.</p>
      </footer>
    </>
  )
}

export default App