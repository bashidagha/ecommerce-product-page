import iconMenu from '../assets/icon-menu.svg'
import logo from '../assets/logo.svg'
import iconCart from '../assets/icon-cart.svg'
import avatar from '../assets/image-avatar.png'
import Image from 'next/image'
import {useState} from 'react'
import styles from '../styles/Navbar.module.scss'
import timg1 from '../assets/image-product-1-thumbnail.jpg'


const Navbar = ({cart, setCart}:any) => {

    const [showCart, setShowCart] = useState(false);

  return (
          <nav className="navbar navbar-expand-lg navbar-light bg-white position-relative">
          <div className="container">

            <div>
            <button className="btn navbar-toggler border-2 me-2" type="button" data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <Image src={iconMenu} alt="icon menu" layout='fixed' width="25px" height="25px"/>
            </button>
            <a className="navbar-brand text-white p-0 m-0 me-3" href="#">
                <Image src={logo} alt="icon menu" layout='fixed' width="150px" height="18px"/>
            </a>
            </div>



            <div className="offcanvas offcanvas-start-lg bg-white" tabIndex={-1} id="offcanvasExample"  aria-labelledby="offcanvasExampleLabel">
              <div className="offcanvas-header d-flex d-lg-none">
                <h5 className="offcanvas-title text-white" id="offcanvasExampleLabel">Navbar</h5>
                <a href="#"  className="text-reset p-0" data-bs-dismiss="offcanvas"  aria-label="close">
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
            <Image src={iconCart} alt="icon cart" layout='fixed' width="50px" height="20px" onClick={()=>setShowCart(!showCart)} className="pe-4"/>
            <Image src={avatar} alt="icon cart" layout='fixed' width="40px" height="40px"/>
          </div>
          </div>

          <div className={`${showCart?styles.cart_preview:styles.cart_preview_hidden} bg-white shadow-sm`} >
              <p className="p-0 m-0 pb-1">Cart</p>
              <hr className="p-0 m-0 mb-1"/>
              <div className="buy_list d-flex justify-content-center align-content-center w-100 h-100">
              {!cart? <span>Your cart is empty</span>:
                    <div>
                        <div className="d-flex">
                          <Image src={timg1} alt="icon menu" layout='fixed'  width="60px" height="60px" className="rounded"/>
                          <p className="ms-1 mt-2 text-muted">Fall Limited Edition Sneakers <br/> 125.00$ x {cart} = <b className="text-black">{125*cart}</b></p>
                          <button type="button" onClick={()=>setCart(0)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg></button>
                        </div>

                        <button className="btn text-white fw-bold w-100 mt-2" type="button" style={{backgroundColor:"hsl(26, 100%, 55%)"}}>Checkout</button>
                    </div>
              }
              </div>
          </div>
        </nav>
  )
}

export default Navbar
