import { useRef } from "react";
import {
  Link,
  NavLink,
} from "react-router-dom"; /* Link para que no actualize la pag */
import logoSHOP from "../../assets/img/logo-shop.webp";
import { BsList, BsXCircle } from "react-icons/bs";

const Header = () => {
  //
  const header = useRef();
  const modal = useRef();

  //
  const showMenu = () => {
    header.current.classList.add("header--move");
    modal.current.classList.add("modal--show");
  };

  const hideMenu = () => {
    header.current.classList.remove("header--move");
    modal.current.classList.remove("modal--show");
  };

  return (
    <>
      <header className="header" ref={header}>
        <nav className="nav">
          <div className="container f-elements f-elements--header">
            <Link to="/">
              <img
                src={logoSHOP}
                alt="Logo de shop"
                className="nav__logo"
                width="32"
                height="32"
              />
            </Link>
            <div className="modal modal--header" ref={modal} onClick={hideMenu}>
              <ul
                className="list list--header"
                onClick={(e) => e.stopPropagation()}
              >
                <li>
                  <NavLink
                    to="/productos"
                    className={({ isActive }) =>
                      isActive ? "list__link list__link--active" : "list__link"
                    }
                    onClick={hideMenu}
                  >
                    Productos
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/nosotros"
                    className={({ isActive }) =>
                      isActive ? "list__link list__link--active" : "list__link"
                    }
                    onClick={hideMenu}
                  >
                    Nosotros
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/historias"
                    className={({ isActive }) =>
                      isActive ? "list__link list__link--active" : "list__link"
                    }
                    onClick={hideMenu}
                  >
                    Historias
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contacto"
                    className={({ isActive }) =>
                      isActive ? "list__link list__link--active" : "list__link"
                    }
                    onClick={hideMenu}
                  >
                    Contacto
                  </NavLink>
                </li>
                <li className="icon icon--close" onClick={hideMenu}>
                  <BsXCircle />
                </li>
              </ul>
            </div>
            <div className="f-elements f-elements--center">
              {/* <select>
                <option value="value1">🌑</option>
                <option value="value2">🌞</option>
                <option value="value3">💻</option>
              </select> */}
              {/* showMenu = ejecutar la referencia */}
              <button className="icon" onClick={showMenu}>
                <BsList />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;

// import { useState, useEffect } from "react";
// import logoSHOP from "../../assets/img/logo-shop.webp";
// const Header = () => {
//   const [path, setPath] = useState("/");
//   const [page, setPage] = useState(<></>);
//   const pages = {
//     "/": <h1>Home</h1>,
//     "/productos": <h1>Productos</h1>,
//     "/nosotros": <h1>Nosotros</h1>,
//     "/historias": <h1>Historias</h1>,
//     "/contacto": <h1>Contacto</h1>,
//   };

//   useEffect(() => {
//     setPage(pages[path]);

//     return () => {
//       console.log("mori");
//     };
//   }, [path]);

//   return (
//     <>
//       <header className="header">
//         <nav className="nav">
//           <div className="container f-elements f-elements--header">
//             <div
//               onClick={() => {
//                 setTest(Date.now());
//               }}
//             >
//               <img
//                 src={logoSHOP}
//                 alt="Logo de shop"
//                 className="nav__logo"
//                 width="32"
//                 height="32"
//               />
//             </div>
//             <div className="modal modal--header">
//               <ul className="list list--header">
//                 <li>
//                   <a
//                     onClick={() => {
//                       setPath("/productos");
//                     }}
//                     className="list__link"
//                   >
//                     Productos
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     onClick={() => {
//                       setPath("/nosotros");
//                     }}
//                     className="list__link"
//                   >
//                     Nosotros
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     onClick={() => {
//                       setPath("/historias");
//                     }}
//                     className="list__link"
//                   >
//                     Historias
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     onClick={() => {
//                       setPath("/contacto");
//                     }}
//                     className="list__link"
//                   >
//                     Contacto
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </header>
//       {page}
//     </>
//   );
// };
// export default Header;
