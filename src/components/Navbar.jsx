import { NavLink } from 'react-router-dom'

const tautan = [
  { ke: '/', label: 'Beranda' },
  { ke: '/tentang', label: 'Tentang Saya' },
  { ke: '/keahlian', label: 'Keahlian' },
  { ke: '/proyek', label: 'Proyek' },
  { ke: '/galeri', label: 'Galeri' },
  { ke: '/kontak', label: 'Kontak' },
]

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-daftar">
        {tautan.map((t) => (
          <li key={t.ke}>
            <NavLink
              to={t.ke}
              end={t.ke === '/'}
              className={({ isActive }) =>
                'navbar-tautan' + (isActive ? ' aktif' : '')
              }
            >
              {t.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar