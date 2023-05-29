import './index.scss';
import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";
import Sidebar from '../Sidebar/';
import AnimatedLetters from '../AnimatedLetters';

const Home = ()=> {
    const [letterClass, setLetterClass] = useState ('text-animate')

  const nameArray = ['R', 'o', 's', 'i', 'e']
  const jobArray = [
    'w','e','b',' ','d','e','v','e','l','o','p','e','r','.',
  ]

  return (
    <>
    <Sidebar />
      <div className="container home-page">
      
        <div className="text-zone">
          <h1>Hi,<br/>I'm <AnimatedLetters letterClass={letterClass}
          strArray={nameArray} idx={15}/> 
          <br/>Creative web developer</h1>
          <h2>Front End Developer / Javascript / REACT </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>

      </div>
    </>

    );

};

export default Home;