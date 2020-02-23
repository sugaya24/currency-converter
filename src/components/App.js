import React from 'react';

import Header from './Header';
import Convert from './Convert';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <div className="container">
        <Header />
        <Convert />
      </div>
      <Footer />
    </div>
  );
};

export default App;
