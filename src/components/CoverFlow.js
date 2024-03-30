import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
// Import images
import eventImage1 from '../assets/EVENTS/CATCH THE VIBE.jpg';
import eventImage2 from '../assets/EVENTS/CINEMATIC DANCE.jpg';
import eventImage3 from '../assets/EVENTS/FACE PAINTING.jpg';
import eventImage4 from '../assets/EVENTS/FANCY DRESS.jpg';
import eventImage5 from '../assets/EVENTS/MEHANDI DESIGN.jpg';
import eventImage6 from '../assets/EVENTS/MIMICRY.jpg';
import eventImage7 from '../assets/EVENTS/NADAN PATTU.jpg';
import eventImage8 from '../assets/EVENTS/NOSTALGIA.jpg';
import eventImage9 from '../assets/EVENTS/PHOTOGRAPHY.jpg';
import eventImage10 from '../assets/EVENTS/SPOT DANCE.jpg';
import eventImage11 from '../assets/EVENTS/SYNCHRONOUS DANCE.jpg';
import eventImage12 from '../assets/EVENTS/VEGETABLE CARVING.jpg';

const photos = [
  eventImage1,
  eventImage2,
  eventImage3,
  eventImage4,
  eventImage5,
  eventImage6,
  eventImage7,
  eventImage8,
  eventImage9,
  eventImage10,
  eventImage11,
  eventImage12
];

const CoverFlow = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Adjust the interval time here (in milliseconds)
    return () => clearInterval(interval);
  }, []);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="pt-[7rem] pb-[2rem]">
      <div className="lg:mx-auto max-w-5xl mx-[1.5rem]">
        <h1 className="text-[3rem] font-bold underline mb-[2rem] text-center">
          Events
        </h1>
        {!modalIsOpen && (
          <Swiper
            effect={'coverflow'}
            loop={true}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{
              clickable: true,
            }}
            centeredSlides={true}
            grabCursor={true}
            coverflowEffect={{
              rotate: 0,
              slideShadows: false,
            }}
            className="coverflow"
          >
            {photos.map((p, index) => (
              <SwiperSlide key={index}>
                <div onClick={() => openModal(index)}>
                  <img src={p} alt={`Event ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {/* Lightbox */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          className="modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-md p-4"
          overlayClassName="overlay fixed top-0 left-0 w-full h-full bg-black opacity-85" // Changed opacity to 60%
        >
          <button onClick={prevImage} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-700 px-2 py-1 rounded-md">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <img src={photos[selectedImageIndex]} alt={`Event ${selectedImageIndex + 1}`} className="max-w-[80vw] max-h-[80vh] object-contain" />
          <button onClick={nextImage} className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-700 px-2 py-1 rounded-md">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <button onClick={closeModal} className="absolute top-4 right-4 text-white bg-gray-700 px-2 py-1 rounded-md">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </Modal>
      </div>
    </section>
  );
};

export default CoverFlow;
