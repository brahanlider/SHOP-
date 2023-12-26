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
