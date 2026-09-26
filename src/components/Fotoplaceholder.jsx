// Komponen foto yang bisa dipakai ulang.
// Kalau prop `src` diisi, tampil gambar. Kalau kosong, tampil kotak placeholder.
function FotoPlaceholder({ src, alt, label, className = '' }) {
  return (
    <figure className={`foto ${className}`}>
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <div className="foto-kosong" role="img" aria-label={alt}>
          <span>{label}</span>
        </div>
      )}
    </figure>
  )
}

export default FotoPlaceholder