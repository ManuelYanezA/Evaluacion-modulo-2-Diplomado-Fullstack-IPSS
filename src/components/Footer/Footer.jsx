import './Footer.css';

function Footer(propiedades) {
    return (
        <footer className="footer">
            <p>&copy; 2026 {propiedades.titulo}. Todos los derechos reservados.</p>
            
            <div className="footerLists">

                <ul className="socialLinks">
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>

                <ul className="footerNav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Productos</a></li>
                    <li><a href="#about">Sobre Nosotros</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>

            </div>

        </footer>
    )
}

export default Footer;