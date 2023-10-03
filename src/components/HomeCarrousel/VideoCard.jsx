import React from 'react'
import { buscar } from "../../client-service";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


function VideoCard({url}) {
    const [videos , setVideos] = useState([])

    useEffect(()=> {
        buscar(url, setVideos)
        
    },[url])
    
   /*  const Flex = styled.div`
        display: flex;
        height: 200px;
        width: 200;
        margin-top: 20px;
        
    ` */
    const Caja = styled.div`
        margin: 10px;
    `
    const Img = styled.img`
        object-fit: contain;
    `
    return (
   
    <div>
        {
            videos.map(video => {
                const {id, titulo, linkI, categoria} = video;
                return( 
                <Link to={`/videos/${id}`} key={id}> 
                    <Caja className="caja" categoria={categoria}>
                        <Img src={linkI} alt={titulo}></Img>
                    </Caja>
                </Link>
                
                )
            })
        }
        
    </div>
  )
}


export default VideoCard

