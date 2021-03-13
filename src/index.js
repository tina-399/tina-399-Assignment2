import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Nav from './components/Scripts/Nav';
import Banner from './components/Scripts/Banner'
import About from './components/Scripts/About'
import Divisionline from './components/Scripts/DivisionLine'
import InventorySection from './components/Scripts/InventorySection'
import Contact from './components/Scripts/Contact' 
import Footer from './components/Scripts/Footer'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}

    < Nav />
    < Banner />

    <main>
      <About />
      <Divisionline />
      <InventorySection />
      <Contact/>
    </main>
    <Footer/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
