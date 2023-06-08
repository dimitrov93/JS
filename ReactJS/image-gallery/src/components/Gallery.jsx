import React, { useState } from "react";
import "./Gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Gallery({ galleryImages }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModel = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handlePrev = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const handleNext = () => {
    slideNumber === galleryImages.length - 1
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };
  return (
    <div>

      {openModal && 
        <div className='sliderWrap'>
          <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleClose}  />
          <FontAwesomeIcon icon={faCircleArrowLeft} className='btnPrev' onClick={handlePrev} />
          <FontAwesomeIcon icon={faCircleArrowRight} className='btnNext' onClick={handleNext} />
          <div className='fullScreenImage'>
            <img src={galleryImages[slideNumber].img} alt='' />
          </div>
        </div>
      }

      {/* <br />
      Current slide number:  {slideNumber}
      <br />
      Total Slides: {galleryImages.length}
      <br /><br /> */}

      <div className='galleryWrap'>
        {
          galleryImages && galleryImages.map((slide, index) => {
            return(
              <div 
                className='single' 
                key={index}
                onClick={ () => handleOpenModel(index) }
              >
                <img src={slide.img} alt='' />
              </div>
            )
          })
        }
      </div>

    </div>
  )

}
