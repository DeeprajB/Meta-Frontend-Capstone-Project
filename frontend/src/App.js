import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Routing from './components/Routing'

import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routing />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
