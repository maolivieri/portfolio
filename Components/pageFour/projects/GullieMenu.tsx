// import { useState } from 'react';
// import Carousel from 'nuka-carousel';
// import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
// import { useTheme } from 'styled-components';

// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import { ContainerScrollHalf } from '../styles';

const GullieMenu = (props) => {
  // const theme = useTheme();
  return (
    <ContainerScrollHalf>
      <video
        width="100%"
        // height="100%"
        autoPlay
        playsInline
        loop
        muted
        // controls
      >
        <source src="/images/videos/menu.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </ContainerScrollHalf>
    // <Carousel
    //   // autoplay
    //   // pauseOnHover
    //   // wrapAround
    //   // autoplayInterval={6000}
    //   renderBottomCenterControls={({ slideCount, currentSlide }) => (
    //     <div
    //       style={{
    //         display: 'flex',
    //         zIndex: 1000,
    //         width: slideCount === 1 ? 0 : '100%',
    //         alignItems: 'center'
    //       }}
    //     >
    //       {Array.from(Array(slideCount).keys()).map((x, i) => (
    //         <div
    //           key={i}
    //           style={{
    //             borderRadius: '99999px',
    //             background: theme.colors.highlights,
    //             width: currentSlide === i ? '0.9rem' : '0.5rem',
    //             height: currentSlide === i ? '0.9rem' : '0.5rem',
    //             margin: '0.8rem 0.5rem'
    //           }}
    //         />
    //       ))}
    //     </div>
    //   )}
    //   style={{ width: '100%' }}
    //   renderCenterLeftControls={({ previousSlide, slideCount }) => (
    //     <button
    //       onClick={previousSlide}
    //       style={{
    //         background: 'transparent',
    //         border: 'none',
    //         cursor: 'pointer',
    //         fontSize: '1.6rem',
    //         color: slideCount === 1 ? 'transparent' : theme.colors.highlights
    //       }}
    //     >
    //       <FaAngleLeft />
    //     </button>
    //   )}
    //   renderCenterRightControls={({ nextSlide, slideCount }) => (
    //     <button
    //       onClick={nextSlide}
    //       style={{
    //         background: 'transparent',
    //         border: 'none',
    //         cursor: 'pointer',
    //         fontSize: '1.6rem',
    //         color: slideCount === 1 ? 'transparent' : theme.colors.highlights
    //       }}
    //     >
    //       <FaAngleRight />
    //     </button>
    //   )}
    // >
    //   <div>
    //     <video
    //       width="100%"
    //       // height="100%"
    //       autoPlay
    //       playsInline
    //       loop
    //       muted
    //       // controls
    //     >
    //       <source src="/images/videos/menu.webm" type="video/mp4" />
    //       Your browser does not support the video tag.
    //     </video>
    //   </div>
    // </Carousel>
  );
};

export { GullieMenu };
