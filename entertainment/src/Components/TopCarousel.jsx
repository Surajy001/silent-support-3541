
//-----new wala-----

import React from 'react'
import Slider from "react-slick";
import BasicCard from './BasicCard';
import Card from 'react-bootstrap/Card';


 const products=[
  {
      id:1,
      image:"https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-0-1z5264082/app_cover/1440x8109a1f1b76b86749d68affac9a166ce03e.jpg",
  },
  {
      id:2,
      image:"https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5259649/cover/1920x770c85c702415cb46fdbc2b704334a1222dbbbea06f09544107aae2e3dc55b58b3e.jpg",
  },
  {
      id:3,
      image:"https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5250012/cover/1920x770541441bea82b4c5ebb5e50fdf65b1486.jpg",
  },
  {
      id:4,
      image:"https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5262216/cover/1920x770e28feaad70594dba87add2092ef149da.jpg",
  },
  {
      id:5,
      image:"https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-6-4z5202574/app_cover/1440x810c7a1b8c1108a4d09b0bc27ce7a5f0463.jpg",
  },
  {
      id:6,
      image:"https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-6-366/app_cover/1440x810671bbd9b62df45bcb7801c9b6e11cac0.jpg",
  },
  {
      id:7,
      image:"https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-6-3392/app_cover/1440x8102a557f472d8447feb0fbb6f82cddd65c.jpg",
  }
]


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", marginRight:"50px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",marginLeft:"50px" ,zIndex:"1" }}
      onClick={onClick}
    />
  );
}

const TopCarousel=()=>{
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
     slidesToShow: 1,
      // slidesToShow: 4,
    slidesToScroll: 1,
    // Padding:"200px",
    className: "center",
    centerMode:true,
    centerPadding: "220px",
    autoplay:true,
    // variableWidth: true,
    nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
  };

  return (
    <div >
      <Slider  {...settings} >
              {
                products.map((item,index)=>{
                  return(
                    <React.Fragment key={index} > 
                     {/* <BasicCard item={item} /> */}
                      <Card style={{ width: 1000,
                            height: 450,
                            margin:" 0 16px",
                            order: "0px solid rgb(49, 54, 61)",
                            backgroundColor: "#0d1117",
                            // color: "rgba(255, 255, 255, 0.5)", 
                            borderRadius:"0px"}}>
                          <Card.Img style={{height: 450,width: 1000,}} variant="top" src={item.image} />
                        </Card>
                     </React.Fragment>  
                  )
                })
              }
      </Slider>
    </div>
  )
}

export default TopCarousel
