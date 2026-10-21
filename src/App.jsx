//basic react routing
// React Router is a library that helps React applications navigate between pages or views based on the URL. It connects a URL path to a React component.

// npm install react-router


// <Route path="/about" element={<About />} />


import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";

function App() {
  const [cart, setCart] = useState([]);


  function handleAddToCart(food) {
    setCart((currentCart) => [...currentCart, food]);
  }

  return (
    <BrowserRouter>
        <Navbar cartCount={cart.length} />

      <Routes>
        <Route
          path="/"
          element={<Home onAddToCart={handleAddToCart} />}
        />

        <Route
          path="/menu"
          element={<Menu onAddToCart={handleAddToCart} />}
        />

        <Route path="/about" element={<About />} />
      </Routes>

      {cart.length > 0 && (
        <div className="cart-notice" role="status">
          <i className="fa-solid fa-cart-shopping"></i> You have {cart.length}{" "}
          {cart.length === 1 ? "item" : "items"} in your cart.
        </div>
      )}

      <Footer />
    </BrowserRouter>
  );
}

export default App;
