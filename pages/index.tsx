import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import img1 from '../assets/image-product-1.jpg'
import img2 from '../assets/image-product-2.jpg'
import img3 from '../assets/image-product-3.jpg'
import img4 from '../assets/image-product-4.jpg'
import timg1 from '../assets/image-product-1-thumbnail.jpg'
import timg2 from '../assets/image-product-2-thumbnail.jpg'
import timg3 from '../assets/image-product-3-thumbnail.jpg'
import timg4 from '../assets/image-product-4-thumbnail.jpg'
import {useState} from 'react'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {

  const [selectImage, setSelectImage] = useState(1);
  const [selectImage1, setSelectImage1] = useState(1);
  let [counter, setCounter] = useState(0);
  const [preview, setPreview] = useState(false);
  let [cart, setCart] = useState(0);

  return (
    <div className={styles.sell_page}>

    <div className={`${preview?styles.preview_panel_show:styles.preview_panel_hidden} text-center d-flex flex-column justify-content-center align-items-center`}>
      <div style={{width:"400px", marginRight:"-380px"}}><button className="btn" type="button" onClick={()=>setPreview(false)}><svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd"/></svg></button></div>
      <Image src={selectImage1===1?img1:selectImage1===2?img2:selectImage1===3?img3:img4}   placeholder="blur" alt="icon menu" layout='fixed' className={`${styles.preview_img} rounded`} width="400px" height="400px"/>
         <div className="btn-group">
           <button type="button" className="btn mx-2" onClick={()=>setSelectImage1(1)}><Image src={timg1} alt="icon menu" layout='fixed'  width="60px" height="60px" className="rounded"/></button>
           <button type="button" className="btn mx-2" onClick={()=>setSelectImage1(2)}><Image src={timg2} alt="icon menu" layout='fixed'  width="60px" height="60px" className="rounded"/></button>
           <button type="button" className="btn mx-2" onClick={()=>setSelectImage1(3)}><Image src={timg3} alt="icon menu" layout='fixed'  width="60px" height="60px" className="rounded"/></button>
           <button type="button" className="btn mx-2" onClick={()=>setSelectImage1(4)}><Image src={timg4} alt="icon menu" layout='fixed'  width="60px" height="60px" className="rounded"/></button>
         </div>
    </div>

    <Navbar cart={cart} setCart={setCart}/>
    <div className={`${styles.container} container`}>
          <div className="row mt-3">
              <div className="col-md-6 text-center">
               <Image onClick={()=>setPreview(true)} src={selectImage===1?img1:selectImage===2?img2:selectImage===3?img3:img4}   placeholder="blur" alt="icon menu" layout='fixed' className={`${styles.preview_img} rounded`} width="400px" height="400px"/>
                  <div className="btn-group">
                    <button type="button" className=" mx-3 p-0 pt-2" onClick={()=>setSelectImage(1)}><Image src={timg1} alt="icon menu" layout='fixed'  width="70px" height="70px" className="rounded"/></button>
                    <button type="button" className=" mx-3 p-0 pt-2" onClick={()=>setSelectImage(2)}><Image src={timg2} alt="icon menu" layout='fixed'  width="70px" height="70px" className="rounded"/></button>
                    <button type="button" className=" mx-3 p-0 pt-2" onClick={()=>setSelectImage(3)}><Image src={timg3} alt="icon menu" layout='fixed'  width="70px" height="70px" className="rounded"/></button>
                    <button type="button" className=" mx-3 p-0 pt-2" onClick={()=>setSelectImage(4)}><Image src={timg4} alt="icon menu" layout='fixed'  width="70px" height="70px" className="rounded"/></button>
                  </div>

              </div>
              <div className="col-md-6 px-5">
                    <h5 className="mt-5">Sneaker Company</h5>
                    <h1>Fall Limited Edition Sneakers</h1>
                    <p className="text-muted">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer. </p>
                    <p className={styles.price}>$125.00  <span style={{backgroundColor:"hsl(25, 100%, 94%)",color:"hsl(26, 100%, 55%)"}}>&nbsp;&nbsp;50%</span></p>
                    <p className="text-decoration-line-through fw-bold text-muted">$250.00</p>

                    <div className="d-flex" >
                      <div className="w-50 mx-3 d-flex justify-content-around align-items-center" style={{backgroundColor:"hsl(223, 64%, 98%)",boxSizing:"content-box"}}>
                        <button style={{color:"hsl(26, 100%, 55%)"}} onClick={()=>setCounter(counter<=0?0:counter-1)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg></button>
                        <span id="buy_number" className="fw-bold">{counter}</span>
                        <button style={{color:"hsl(26, 100%, 55%)"}} onClick={()=>setCounter(counter+1)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg></button>
                      </div>
                      <div className="w-50">
                        <button type="button" className={`btn ${styles.btn_addtobasket} py-2 fw-bold`} onClick={()=>setCart(counter)}><svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffffff" fillRule="nonzero"/></svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Add to cart</button>
                      </div>
                    </div>
          </div>
          </div>
    </div>
    </div>
  )
}

export default Home
