import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Slider.css';
import img1 from '../../assets/img-1.png';
import img2 from '../../assets/img-2.png';
import img3 from '../../assets/img-3.png';
import img4 from '../../assets/img-4.png';
import img5 from '../../assets/img-5.png';
import img6 from '../../assets/img-6.png';
import img7 from '../../assets/img-7.png';
import img8 from '../../assets/img-8.png';
import left from '../../assets/leftArrow.png';
import right from '../../assets/rightArrow.png';

const Gallery = () => {
  const slider = useRef(null);
  const [tx, setTx] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(window.innerWidth > 800 ? 2 : 1);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth > 800 ? 2 : 1);
      setTx(0); // Reset translation on resize
      slider.current.style.transform = 'translateX(0%)';
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slideForward = () => {
    if (tx > -(100 * (8 - slidesToShow))) { // Assuming 8 images in total
      setTx(prevTx => {
        const newTx = prevTx - (100 / slidesToShow);
        slider.current.style.transform = `translateX(${newTx}%)`;
        return newTx;
      });
    }
  };

  const slideBackward = () => {
    if (tx < 0) {
      setTx(prevTx => {
        const newTx = prevTx + (100 / slidesToShow);
        slider.current.style.transform = `translateX(${newTx}%)`;
        return newTx;
      });
    }
  };

  return (
    <div className="gallery">
      <img src={right} alt="Next" className='next-btn' onClick={slideForward} />
      <img src={left} alt="Back" className='back-btn' onClick={slideBackward} />
      <div className='slider'>
        <ul ref={slider}>
          

          <li>
            <div className="slide">
              <img src={img1} alt="Harper Ellis Hair Extensions" />
              <div className="text-content">
                <h3>Harper Ellis Hair Extensions</h3>
              </div>
              <Link className="book" to="https://www.google.com/">Book Now</Link>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={img2} alt="highlights/lowlights" />
              <div className="text-content">
              <h3>Highlights/Lowlights</h3>
              </div>
              <Link className='book' to="https://www.google.com/">Book Now</Link>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={img3} alt="Wash and style" />
            <div className="text-content">
              <h3>Wash and Style</h3>
              </div>
              <Link className='book' to="https://www.google.com/">Book Now</Link>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={img4} alt="Root Retouch" />
            <div className="text-content">
              <h3>Root Retouch</h3>
              </div>
              <Link className='book' to="https://www.google.com/">Book Now</Link>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={img5} alt="All Over Color" />
            <div className="text-content">
              <h3>All Over Color</h3>
              </div>
              <Link className='book' to="https://www.google.com/">Book Now</Link>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={img6} alt="Cut/Trim" />
            <div className="text-content">
              <h3>Cut/Trim</h3>
              </div>
              <Link className='book' to="https://www.google.com/">Book Now</Link>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={img7} alt="Bridal Hair And Makeup" />
            <div className="text-content">
              <h3>Bridal Hair And Makeup</h3>
              </div>
              <Link className='book' to="https://www.google.com/">Book Now</Link>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={img8} alt="Spa Girl Facial" />
            <div className="text-content">
              <h3>Spa Girl Facial</h3>
              <span>Dermabrasion/Lymphatic Drainage</span>
              </div>
              <Link className='book' to="https://www.google.com/">Book Now</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
