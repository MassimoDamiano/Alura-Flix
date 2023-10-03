import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import VideoCard from "./VideoCard";
import styled from "styled-components";
import { buscar } from "../../client-service";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ContainerSlider = styled.div`
 max-width: 95vw;
`
const Caja = styled.div`
        margin-top: 50px;
        margin: 10px;
    `
const Img = styled.img`
        object-fit: contain;
        height: 200px;
        width: 400px;
    `
const TitleCategory = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-top: 30px;
  color: #00c86f;
  font-family: "Chakra Petch",sans-serif;
  padding: 30px;
`

 const  SimpleSlider = ({url}) => {
const settings = {
    
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
   
};
const [videos , setVideos] = useState([])

useEffect(()=> {
    buscar(url, setVideos)
    
},[url])
  
    return (
      <ContainerSlider>
      
        <Slider {...settings}>
        {
            videos.map(video => {
                const {id, titulo, linkI, categoria} = video;
                {if(video.categoria === "frontend"){
                  return( 
                    <Link to={`/videos/${id}`} key={id}> 
                      <Caja className="caja" categoria={categoria.front}>
                          <Img src={linkI} alt={titulo}></Img>
                      </Caja>
                    </Link>)

                }}
            })
        }
        
        </Slider>

        <TitleCategory>Back End</TitleCategory>
        
        <Slider {...settings}>
        {
            videos.map(video => {
                const {id, titulo, linkI, categoria} = video;
                {if(video.categoria === "backend"){
                  return( 
                    <Link to={`/videos/${id}`} key={id}> 
                      <Caja className="caja" categoria={categoria.front}>
                          <Img src={linkI} alt={titulo}></Img>
                      </Caja>
                    </Link>)

                }}
                
            })
        }
        </Slider>
        <TitleCategory>DevOps</TitleCategory>

        <Slider {...settings}>
        {
            videos.map(video => {
                const {id, titulo, linkI, categoria} = video;
                {if(video.categoria === "devops"){
                  return( 
                    <Link to={`/videos/${id}`} key={id}> 
                      <Caja className="caja" categoria={categoria.front}>
                          <Img src={linkI} alt={titulo}></Img>
                      </Caja>
                    </Link>)

                }}
                
            })
        }
        </Slider>

      </ContainerSlider>
    );
  }

  export default SimpleSlider