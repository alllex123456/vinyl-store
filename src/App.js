import { useState } from 'react';

import Header from './components/Layout/Header';
import VinylList from './components/Vinyls/VinylList';
import Footer from './components/Layout/Footer';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => setShowCart(true);
  const hideCartHandler = () => setShowCart(false);

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {showCart && <Cart onHideCart={hideCartHandler} />}
      <VinylList />
      <Footer />
    </CartProvider>
  );
}

export default App;
