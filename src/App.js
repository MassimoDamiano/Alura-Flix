import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/404.jsx";
import Video from "./pages/nuevo-video";
import Footer from "./components/Footer/Footer";

  
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/nuevo-video' element={<Video/>}/>
        <Route path='*' element={<Error/>} />

      </Routes>
      
    </Router>
  );
}

export default App;
