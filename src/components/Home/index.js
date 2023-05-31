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
  
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);



  return (
    <>
    <Sidebar />
      <div className="container home-page">
      
        <div className="text-zone">

          <h1>


<span className={`${letterClass} letter`}>H</span>
<span className={`${letterClass} letter`}>i</span>
<br />
<span className={`${letterClass} letter`}>I</span>
<span className={`${letterClass} letter`}>'m</span>
<br />

          <AnimatedLetters letterClass={letterClass}
          strArray={nameArray} idx={15}/> 
          <br/>

          <AnimatedLetters letterClass={letterClass}
          strArray={jobArray} idx={20}/></h1>

          <h2>Front End Developer / JavaScript / React </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>

      </div>
    </>

    );

};

export default Home;