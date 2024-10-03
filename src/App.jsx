import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Chits from './pages/Chits';
import Chitgroup from './pages/Chitgroup';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Chits" element={<Chits />} />
        <Route path="/chitgroup" element={<Chitgroup />} />
        <Route path="/contactUs" element={<ContactUs/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
