import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const SliderMarketing: React.FC = () => {
  const images = [
    {
      original: "/img/Cashback-1.png",
    },
    {
      original: "/img/crecen.png",
    },
    {
      original: "/img/cambiar-linea.png",
    },
  ];
  

  return (
    <>
    <ImageGallery 
      items={images} 
      showPlayButton={false}
      showFullscreenButton={false}
      showBullets={true}
      autoPlay={false}    
      lazyLoad={true}
    />
    <div className='bg-white'>
        <br />
        <br />
        <br />
      </div>
    </>
    
  );
};

export default SliderMarketing;