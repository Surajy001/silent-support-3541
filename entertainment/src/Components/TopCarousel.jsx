/*import React from 'react'

const TopCarousel = () => {
  return (
    <div>TopCarousel</div>
  )
}

export default TopCarousel
*/
//SwipeToSlide

// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class TopCarousel extends Component {
//   render() {
//     const settings = {
//       className: "center",
//       infinite: true,
//       centerPadding: "60px",
//       slidesToShow: 5,
//       swipeToSlide: true,
//       afterChange: function(index) {
//         console.log(
//           `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
//         );
//       }
//     };
//     return (
//       <div>
//         <h2>Swipe To Slide</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//           <div>
//             <h3>7</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div>
//           <div>
//             <h3>9</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import Slider from "react-slick";

import { FaAngleLeft ,FaAngleRight } from 'react-icons/fa';

export default function TopCarousel(){

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <FaAngleLeft {...props} />
      );
    
      const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        
        <FaAngleRight  {...props} />
      );

    // FaAngleLeft  FaAngleRight GoChevronRight

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
      prevArrow:<SlickArrowLeft /> ,
      nextArrow:<SlickArrowRight />
    };

    return (
        <div className="card__container">
      <h1>dxgfchvjk</h1>
    <Slider {...settings} className="card__container--inner">
    <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
    
           </Slider>
           </div>
          
       );


    // return (
    //   <div border="1px solid">
    //     <h2> Single Item</h2>
    //     <Slider {...settings} >
    //       <div>
    //         <h3>1</h3>
    //       </div>
    //       <div>
    //         <h3>2</h3>
    //       </div>
    //       <div>
    //         <h3>3</h3>
    //       </div>
    //       <div>
    //         <h3>4</h3>
    //       </div>
    //       <div>
    //         <h3>5</h3>
    //       </div>
    //       <div>
    //         <h3>6</h3>
    //       </div>
    //     </Slider>
    //   </div>
    // );
  }
