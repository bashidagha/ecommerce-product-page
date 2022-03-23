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
              <p className="p-0 m-0">Cart</p>
              <hr className="p-0 m-0"/>
              <div className="buy_list d-flex justify-content-center align-content-center w-100 h-100">
              {!cart? <span>Your cart is empty</span>:
                    <div>
                        <div className="d-flex">
                          <Image src={timg1} alt="icon menu" layout='fixed'  width="40px" height="40px" className="rounded"/>
                          <p>Fall Limited Edition Sneakers</p>
                          <button type="button" className="btn" onClick={()=>setCart(0)} style={{color:"black"}}><svg width="14" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs></svg></button>
                        </div>

                        <button className="btn text-white fw-bold" type="button" style={{backgroundColor:"hsl(26, 100%, 55%)"}}>Checkout</button>
                    </div>}
              </div>
          </div>
        </nav>
  )
}

export default Navbar
