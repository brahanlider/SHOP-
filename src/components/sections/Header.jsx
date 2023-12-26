import logoSHOP from "../../assets/img/logo-shop.webp";
const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="container f-elements f-elements--header">
            <a>
              <img
                src={logoSHOP}
                alt="Logo de shop"
                className="nav__logo"
                width="32"
                height="32"
              />
            </a>
            <div className="modal modal--header">
              <ul className="list list--header">
                <li>
                  <a className="list__link">Home</a>
                </li>
                <li>
                  <a className="list__link">Productos</a>
                </li>
                <li>
                  <a className="list__link">Nosotros</a>
                </li>
                <li>
                  <a className="list__link">Historias</a>
                </li>
                <li>
                  <a className="list__link">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
