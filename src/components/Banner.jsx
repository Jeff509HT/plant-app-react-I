//import des fichiers css
import '../styles/Banner.css'
// pour importer des images
import logo from '../assets/logo.png'
function Banner() {
    const title = 'La maison jungle ';
  return (
    <div className="lmj-banner">
        <img src={logo} alt="logo la maison jungle" />
        <h1>{title}</h1>
    </div>
  )
}

export default Banner