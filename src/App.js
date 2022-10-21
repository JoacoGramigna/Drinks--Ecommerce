import './App.css';

import { BrowserRouter, Routes, Route, } from "react-router-dom";

import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';

import { CartProvider } from './context/CartContext';

import Home from './pages/Home';

import './components/NavBar';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bebidas" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
