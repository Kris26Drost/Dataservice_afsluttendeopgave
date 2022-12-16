
import { NavLink, Link } from 'react-router-dom';


const Navbar = () => {


  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">

        <a className="navbar-brand" href="#">Opgave 15</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink end className="nav-link" aria-current="page" to='/'>Home</NavLink>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Viborg - Haveservice</span>

              <ul className="dropdown-menu">
                <li> <NavLink className="dropdown-item" to='/velkomst'>Velkomst</NavLink> </li>

                <li><hr className="dropdown-divider" /></li>

                <li> <NavLink className="dropdown-item" to='/services'>Services</NavLink> </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Vejret</span>

              <ul className="dropdown-menu">
                <li> <NavLink className="dropdown-item" to='/weather'>Weather</NavLink> </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Nyheder</span>

              <ul className="dropdown-menu">
                <li> <NavLink className="dropdown-item" to='/news'>News</NavLink> </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Energidata</span>

              <ul className="dropdown-menu">
                <li> <NavLink className="dropdown-item" to='/energi'>Energi Priser</NavLink> </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Opgave 5</span>

              <ul className="dropdown-menu">
                <li> <NavLink className="dropdown-item" to='/countries'>Countries</NavLink> </li>
              </ul>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar