import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import { Box , SimpleGrid ,Stack , Link, Text, Container, Flex, ChakraProvider} from '@chakra-ui/react';
import TopCarousel from '../Components/TopCarousel';
import FooterTop from '../Components/FooterTop';

import {Link as RouterLink} from "react-router-dom";

const getmovies1=()=>{
  return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a390a2f1033c8a75b6556ff75a58b155&language=en-US&page=1&region=IN`)
  .then((res)=>res.json());
}
// console.log(getmovies());

const getmovies2=()=>{
  return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=a390a2f1033c8a75b6556ff75a58b155&page=1&region=IN`)
  // return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=a390a2f1033c8a75b6556ff75a58b155&page=1&region=IN&language=hi-IN`)
  .then((res)=>res.json());
}

const getmovies3=()=>{
  return fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=a390a2f1033c8a75b6556ff75a58b155&language=en-US&page=1&region=IN`)
  .then((res)=>res.json());
}

const getmovies4=()=>{
  return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=a390a2f1033c8a75b6556ff75a58b155&language=en-US&page=1`)
  .then((res)=>res.json());
}


const Movies = () => {

  const [data1,setData1]=useState([]);
  const [data2,setData2]=useState([]);
  const [data3,setData3]=useState([]);
  const [data4,setData4]=useState([]);
  const [loading , setLoading]=useState(false);

  // 1st Popular Movies
  useEffect(()=>{
    setLoading(true);
    getmovies1()
    .then(res=>{
      setData1(res.results)
      setLoading(false);
      console.log(res.results)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  // console.log("data",data);

  // 2nd Trending Movies 
  useEffect(()=>{
    setLoading(true);
    getmovies2()
    .then(res=>{
      setData2(res.results)
      setLoading(false);
      console.log(res.results);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  // 3rd upcoming Movies
  useEffect(()=>{
    setLoading(true);
    getmovies3()
    .then(res=>{
      setData3(res.results)
      setLoading(false);
      console.log(res.results);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

// 4th  Movies
useEffect(()=>{
  setLoading(true);
  getmovies4()
  .then(res=>{
    setData4(res.results)
    setLoading(false);
    console.log(res.results);
  })
  .catch((err)=>{
    console.log(err);
  })
},[])

  const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      // className: "center",
      // centerMode:true,
      centerPadding: "30px",
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };

  return loading ? (<h2 style={{color:"white", fontSize:"20px",fontWeight:"500"}}>Loading....</h2>) :  (
    <Box marginTop={25} paddingBottom="25px">
      <TopCarousel />
      <Box marginTop={50}>
        
    <div>
      <h2 style={{margin:"12px",marginBottom:"16px", textAlign:"start",color:"white", fontSize:"20px",fontWeight:"500"}}> Popular Movies  </h2>
    <Slider {...settings}>
      {data1.map((item,index)=>{
        return (
          <RouterLink to={`/movies/${item.id}`}>
            <React.Fragment key={item.id} >
                <Card style={{ width: 230,
                            height: 400,
                            order: "0px solid rgb(49, 54, 61)",
                            backgroundColor: "#0d1117",
                            // color: "rgba(255, 255, 255, 0.5)", 
                            }}>
                          <Card.Img style={{height: 450,width: 900,}} variant="top" src={"https://image.tmdb.org/t/p/w500"+item.poster_path} />
                        </Card>
            </React.Fragment>
            </RouterLink>
        )
      })}
    </Slider>  
    </div><br/>
    
    <div >
      <h2 style={{margin:"12px",marginBottom:"16px", textAlign:"start",color:"white", fontSize:"20px",fontWeight:"500"}}> Trending Movies  </h2>
    <Slider {...settings}>
      {data2.map((item,index)=>{
        return (
          
          <RouterLink to={`/movies/${item.id}`}>
            <React.Fragment key={item.id} >
                <Card style={{ width: 230,
                            height: 400,
                            order: "0px solid rgb(49, 54, 61)",
                            backgroundColor: "#0d1117",
                            // color: "rgba(255, 255, 255, 0.5)", 
                            }}>
                          <Card.Img style={{height: 450,width: 900,}} variant="top" src={"https://image.tmdb.org/t/p/w500"+item.poster_path} />
                        </Card>
            </React.Fragment>
            </RouterLink>
        )
      })}
    </Slider>  
    </div><br/>

    <div style={{color:"white",fontSize:"16px",fontWeight:"500"}}>
      <h2 style={{margin:"12px",marginBottom:"16px", textAlign:"start",color:"white", fontSize:"20px",fontWeight:"500"}}> Upcoming Movies  </h2>
    <Slider {...settings}>
      {data3.map((item,index)=>{
        return (
          <RouterLink to={`/movies/${item.id}`}>
            <React.Fragment key={item.id} >
                <Card style={{ width: 230,
                            height: 350,
                            order: "0px solid rgb(49, 54, 61)",
                            backgroundColor: "#0d1117",
                            // color: "rgba(255, 255, 255, 0.5)", 
                            }}>
                          <Card.Img style={{height: 300,width: 900,}} variant="top" src={"https://image.tmdb.org/t/p/w500"+item.poster_path} />
                        <Card.Text style={{marginTop:"7px"}}>{item.release_date}</Card.Text>
                        </Card>
            </React.Fragment>
            </RouterLink>
        )
      })}
    </Slider>  
    </div><br/>

    <div >
      <h2 style={{margin:"12px",marginBottom:"16px", textAlign:"start",color:"white", fontSize:"20px",fontWeight:"500"}}> Top Rated Movies  </h2>
    <Slider {...settings}>
      {data4.map((item,index)=>{
        return (
          <RouterLink to={`/movies/${item.id}`}>
            <React.Fragment key={index} >
                <Card style={{ width: 230,
                            height: 400,
                            order: "0px solid rgb(49, 54, 61)",
                            backgroundColor: "#0d1117",
                            // color: "rgba(255, 255, 255, 0.5)", 
                            }}>
                          <Card.Img style={{height: 450,width: 900,}} variant="top" src={"https://image.tmdb.org/t/p/w500"+item.poster_path} />
                        </Card>
            </React.Fragment>
            </RouterLink>
        )
      })}
    </Slider>  
    </div><br/>
    </Box>
    <ChakraProvider>
    <FooterTop />
    </ChakraProvider>
    </Box>
  )
}

export default Movies;
