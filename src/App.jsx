import { BrowserRouter, Routes, Route } from "react-router"
import Home from './pages/Home.jsx'
// import Menu from './pages/Menu.jsx'
// import About from './pages/About.jsx'
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"


//basic react routing
// React Router is a library that helps React applications navigate between pages or views based on the URL. It connects a URL path to a React component.

// npm install react-router


// <Route path="/about" element={<About />} />

function App() {
  return (
    <BrowserRouter>

  

        <Navbar />


        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/menu" element={<Menu />} /> */}
          {/* <Route path="/about" element={<About />} /> */}

        </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App