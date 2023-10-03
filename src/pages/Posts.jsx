import { useState, useEffect } from "react"
import styled from "styled-components"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { useParams } from "react-router-dom"
import { buscar } from "../client-service"

const Post = ({url}) => {

    const [videos, setVideos] = useState({})

    const {id} = useParams()

    useEffect(() => {
        buscar(`http://localhost:5000/videos/${id}`, setVideos)
    },[id])


const Container = styled.div`
    display: block;
`
    
const Title = styled.h2`
    color: #FFF;
    font-size: 3rem;
    font-weight: bold;
    margin-top: 50px ;
    margin-left: 30px;
`
const Descripcion = styled.p`
  color: #fff;
  line-height:16px;
  font-size: 25px;
  margin-left: 40px;
`    
const CajaVideo = styled.div`
  display: flex;
  margin: 30px;
  margin-top: 50px;

  
  

`

return(

       
   <main>
     <Header/>
     <Container>
       <Title>{videos.titulo}</Title>
       <CajaVideo >
       <iframe 
          width="1000" 
          height="415" 
          src={videos.linkV} title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
       </iframe>
       <Descripcion>{videos.descripcion}</Descripcion>
       </CajaVideo>
     </Container>
     <Footer/>
   </main>
 )
}

export default Post