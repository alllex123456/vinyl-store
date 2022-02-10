import { Fragment } from 'react';

import Header from './components/Layout/Header';
import VinylList from './components/Vinyls/VinylList';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <Fragment>
      <Header />

      <VinylList />
      <Footer />
    </Fragment>
  );
}

export default App;
