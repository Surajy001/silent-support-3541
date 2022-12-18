import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';

const getmovies1=()=>{
  return fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=a390a2f1033c8a75b6556ff75a58b155&language=en-US`)
  .then((res)=>res.json());
}
// console.log(getmovies1());

const getmovies2=()=>{
  return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a390a2f1033c8a75b6556ff75a58b155&language=en-US`)
  .then((res)=>res.json());
}

const getmovies3=()=>{
  return fetch(`https://api.themoviedb.org/3/tv/popular?api_key=a390a2f1033c8a75b6556ff75a58b155&language=hi-IN&page=1`)
  .then((res)=>res.json());
}

const getmovies4=()=>{
  return fetch(`https://api.themoviedb.org/3/discover/tv?api_key=a390a2f1033c8a75b6556ff75a58b155&language=en-US&sort_by=popularity.desc&page=1&timezone=India%2FNew%20Delhi&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&region=IN`)
  .then((res)=>res.json());
}

const Movies = () => {

  const [data1,setData1]=useState([]);
  const [data2,setData2]=useState([]);
  const [data3,setData3]=useState([]);
  const [data4,setData4]=useState([]);
  const [loading , setLoading]=useState(false);

  // 1st Trending Near You
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
  // console.log("data1",data1);


  // 2nd Popular Movies
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

  // 3rd Popular TV Shows
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

// 4th Discover TV Shows 
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
    // slidesToScroll: 1,
    className: "center",
    centerPadding: "10px",
    slidesToScroll: 3
  };

  return loading ? (<h2 style={{color:"white", fontSize:"20px",fontWeight:"500"}}>Loading....</h2>) : (
    <div style={{ paddingBottom:"25px"}}>
    <div >
      <h2 style={{margin:"12px",marginBottom:"16px", textAlign:"start",color:"white", fontSize:"20px",fontWeight:"500"}}> Trending Near You </h2>
    <Slider {...settings}>
      {data1.map((item,index)=>{
        return (
            <React.Fragment key={index} >
                <Card style={{ width: 230,
                            height: 400,
                            margin:"0",
                            order: "0px solid rgb(49, 54, 61)",
                            backgroundColor: "#0d1117",
                            // color: "rgba(255, 255, 255, 0.5)", 
                            }}>
                          <Card.Img style={{height: 450,width: 900,}} variant="top" src={"https://image.tmdb.org/t/p/w500"+item.poster_path} />
                        </Card>
            </React.Fragment>
        )
      })}
    </Slider>  
    </div><br/>

     <div style={{marginTop:"15px"}}>
    <h2 style={{margin:"12px",marginBottom:"16px", textAlign:"start",color:"white", fontSize:"20px",fontWeight:"500"}}> Popular Movies </h2>
    <Slider {...settings}>
      {data2.map((item,index)=>{
        return (
            // <div>
            //     <h3>{index}</h3>
            // </div>
            <React.Fragment key={index} >
                {/* <BasicCard item={item} /> */}
                 <Card style={{ width: 230,
                            height: 400,
                            margin:"0",
                            order: "0px solid rgb(49, 54, 61)",
                            backgroundColor: "#0d1117",
                            // color: "rgba(255, 255, 255, 0.5)", 
                            }}>
                          <Card.Img style={{height: 450,width: 900,}} variant="top" src={"https://image.tmdb.org/t/p/w500"+item.poster_path} />
                        </Card>
            </React.Fragment>
        )
      })}
    </Slider>
    </div> <br/>


     <div style={{marginTop:"15px",color:"white",fontSize:"15px",fontWeight:"500"}}>
    <h2 style={{margin:"12px",marginBottom:"16px", textAlign:"start",color:"white", fontSize:"20px",fontWeight:"500"}}> Popular TV Shows </h2>
    <Slider {...settings}>
      {data3.map((item,index)=>{
        return (
            // <div>
            //     <h3>{index}</h3>
            // </div>
            <React.Fragment key={index} >
                {/* <BasicCard item={item} /> */}
                 <Card style={{ width: 230,
                            height: 300,
                            margin:"0",
                            order: "0px solid rgb(49, 54, 61)",
                             backgroundColor: "#0f0617",
                             lineHeight:"25px",
                            // color: "rgba(255, 255, 255, 0.5)", 
                            }}>
                          <Card.Img style={{height: 250,width: 900,}} variant="top" src={"https://image.tmdb.org/t/p/w500"+item.poster_path} />
                         <Card.Title style={{padding:"4px"}}>{item.name}</Card.Title>
                        </Card>
            </React.Fragment>
        )
      })}
    </Slider>
    </div> <br />

    <div style={{marginTop:"15px",color:"white",fontSize:"15px",fontWeight:"500"}}>
    <h2 style={{margin:"12px",marginBottom:"16px", textAlign:"start",color:"white", fontSize:"20px",fontWeight:"500"}}> Discover TV Shows  </h2>
    <Slider {...settings}>
      {data4.map((item,index)=>{
        return (
            // <div>
            //     <h3>{index}</h3>
            // </div>
            <React.Fragment key={index} >
                {/* <BasicCard item={item} /> */}
                 <Card style={{ width: 230,
                            height: 300,
                            margin:"0",
                            order: "0px solid rgb(49, 54, 61)",
                             backgroundColor: "#0f0617",
                            // color: "rgba(255, 255, 255, 0.5)", 
                            }}>
                          <Card.Img style={{height: 250,width: 900,}} variant="top" src={"https://image.tmdb.org/t/p/w500"+item.poster_path} />
                         <Card.Title style={{padding:"5px"}}>{item.name}</Card.Title>
                         {/* <Card.Text style={{}}>{item.release_date}</Card.Text> */}

                        </Card>
            </React.Fragment>
        )
      })}
    </Slider>
    </div> 
    </div>
  )
}

export default Movies;
