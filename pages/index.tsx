import type { NextPage } from 'next'
import Head from 'next/head'
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

const Home: NextPage = () => {

  const [selectImage, setSelectImage] = useState(1);
  let [counter, setCounter] = useState(0);

  return (
    <div className={`${styles.container} container`}>
          <div className="row mt-3">
              <div className="col-md-6 text-center">
               <Image src={selectImage===1?img1:selectImage===2?img2:selectImage===3?img3:img4}   placeholder="blur" alt="icon menu" layout='fixed' id="preview_img" width="400px" height="400px" className="rounded"/>
                  <div className="btn-group">
                    <button type="button" className="btn mx-2" onClick={()=>setSelectImage(1)}><Image src={timg1} alt="icon menu" layout='fixed' id="preview_img" width="60px" height="60px" className="rounded"/></button>
                    <button type="button" className="btn mx-2" onClick={()=>setSelectImage(2)}><Image src={timg2} alt="icon menu" layout='fixed' id="preview_img" width="60px" height="60px" className="rounded"/></button>
                    <button type="button" className="btn mx-2" onClick={()=>setSelectImage(3)}><Image src={timg3} alt="icon menu" layout='fixed' id="preview_img" width="60px" height="60px" className="rounded"/></button>
                    <button type="button" className="btn mx-2" onClick={()=>setSelectImage(4)}><Image src={timg4} alt="icon menu" layout='fixed' id="preview_img" width="60px" height="60px" className="rounded"/></button>
                  </div>

              </div>
              <div className="col-md-6 px-5">
                    <h5 className="mt-5">Sneaker Company</h5>
                    <h1>Fall Limited Edition Sneakers</h1>
                    <p className="text-muted">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer. </p>
                    <p className={styles.price}>$125.00</p>
                    <p className="text-decoration-line-through fw-bold text-muted">$250.00</p>
                    <div className="d-flex">
                      <div className="w-50 d-flex justify-content-around align-items-center">
                        <button type="button" className="btn" style={{color:"hsl(26, 100%, 55%)"}} onClick={()=>setCounter(counter<=0?0:counter--)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg></button>
                        <span id="buy_number" className="fw-bold">{counter}</span>
                        <button type="button" className="btn" style={{color:"hsl(26, 100%, 55%)"}} onClick={()=>setCounter(counter++)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg></button>
                      </div>
                      <div className="w-50">
                        <button type="button" className={`btn ${styles.btn_addtobasket} py-2 fw-bold`}><svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffffff" fillRule="nonzero"/></svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Add to cart</button>
                      </div>
                    </div>
          </div>
          </div>
    </div>
  )
}

export default Home
