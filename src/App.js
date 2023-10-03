import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/404.jsx";
import Post from "./pages/Posts.jsx";
import Video from "./pages/nuevo-video";
import Footer from "./components/Footer/Footer";
import { saveVideo } from "./client-service";
  
function App() {
  const handleSubmit = (productData) =>{
     saveVideo(productData)
     
   }
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/nuevo-video' element={<Video handleSubmit={handleSubmit} />}/>
        <Route path='/videos/:id' element={<Post/>}/>
        <Route path='*' element={<Error/>} />

      </Routes>
      
    </Router>
  );
}

export default App;
