import React from 'react';

// import { About, Footer, Header, Skills, Testimonial, Work } from './container';
// import { Navbar } from './components';
import './App.scss';
import MainRoutes from './routes';

const App = () => (
  <div className="app">
    <MainRoutes />
    {/* <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer /> */}
  </div>
);

export default App;
