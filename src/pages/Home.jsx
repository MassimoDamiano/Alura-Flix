import React from 'react'
import Header from "../components/Header/Header.jsx"
import Banner from "../components/Banner/Banner.jsx"
import SimpleSlider from "../components/HomeCarrousel/Slider.jsx"
import VideoCard from "../components/HomeCarrousel/VideoCard.jsx"
import Footer from "../components/Footer/Footer.jsx"
function Home() {
    return (
        <div>
          <Header/>
          <Banner/>
          <SimpleSlider/>
         
          <Footer/>
        </div>
      );
    }

export default Home


