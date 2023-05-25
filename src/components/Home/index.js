import './index.scss';
import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";
import Sidebar from '../Sidebar/';


const Home = ()=> {
    
  const nameArray = ['R', 'o', 's', 'i', 'e']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  return (
    <>
    <Sidebar />
      <div className="container home-page">
      
        <div className="text-zone">
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