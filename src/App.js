import './App.css';
import { Fragment } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Proyects from './components/proyects/Proyects';
import Trainig from './components/training/Training';
import Hability from './components/hability/Hability';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Fragment>
      <Header/>
      <Home/>
      <About/>
      <Proyects/>
      <Trainig/>
      <Hability/>
      <Contact/>
      <Footer/>
    </Fragment>
  );
}

export default App;
