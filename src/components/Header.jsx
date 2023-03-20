import worldLogo from '../assets/planet.svg'
import '../styles/header.css'

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={worldLogo} alt="an icon of the planet" />
            <h3 className="header__title">zowie's travel journal.</h3>
        </header>
    )
}

export default Header