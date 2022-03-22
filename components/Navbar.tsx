import iconMenu from '../assets/icon-menu.svg'
import logo from '../assets/logo.svg'
import iconCart from '../assets/icon-cart.svg'
import avatar from '../assets/image-avatar.png'
import Image from 'next/image'

const Navbar = () => {
  return (
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">

            <div>
            <button className="btn navbar-toggler border-2 me-2" type="button" data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <Image src={iconMenu} alt="icon menu" layout='fixed' width="25px" height="25px"/>
            </button>
            <a className="navbar-brand text-white p-0 m-0" href="#">
                <Image src={logo} alt="icon menu" layout='fixed' width="150px" height="18px"/>
            </a>
            </div>



            <div className="offcanvas offcanvas-start-lg bg-white" tabIndex={-1} id="offcanvasExample"  aria-labelledby="offcanvasExampleLabel">
              <div className="offcanvas-header d-flex d-lg-none">
                <h5 className="offcanvas-title text-white" id="offcanvasExampleLabel">Navbar</h5>
                <a href="javascript:void(0)"  className="text-reset p-0" data-bs-dismiss="offcanvas"  aria-label="close">
                  <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24" fill="#575767"  viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg>
                </a>
              </div>
              <div className="offcanvas-body p-lg-0">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">Collection</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">Men</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">Women</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mx-3 d-flex align-items-center">
            <Image src={iconCart} alt="icon cart" layout='fixed' width="50px" height="20px" className="pe-4"/>
            <Image src={avatar} alt="icon cart" layout='fixed' width="40px" height="40px"/>
          </div>
          </div>
        </nav>
  )
}

export default Navbar
