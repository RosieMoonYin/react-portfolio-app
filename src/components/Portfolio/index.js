import Sidebar from '../Sidebar';
import './index.scss'
import React from 'react';

function Portfolio() {
  return (
    <div className="wrap">
        <Sidebar/>
      <div className="header">3D Gallery Albums</div>
      <div className="content">
        <div className="row">
          <a className="set" href="#">
            <span className="layer one"><img src="https://placeimg.com/256/256/arch" alt="" /></span>
            <span className="layer two"><img src="https://placeimg.com/256/256/animals" alt="" /></span>
            <span className="layer three">One</span>
            <img src="https://placeimg.com/256/256/tech" alt="" />
          </a>
          <a className="set" href="#">
            <span className="layer one"><img src="https://placeimg.com/256/256/animal" alt="" /></span>
            <span className="layer two"><img src="https://placeimg.com/256/256/tech" alt="" /></span>
            <span className="layer three">Two</span>
            <img src="https://placeimg.com/256/256/arch" alt="" />
          </a>
          <a className="set" href="#">
            <span className="layer one"><img src="https://placeimg.com/256/256/tech" alt="" /></span>
            <span className="layer two"><img src="https://placeimg.com/256/256/animal" alt="" /></span>
            <span className="layer three">Three</span>
            <img src="https://placeimg.com/256/256/arch" alt="" />
          </a>
        </div>
        <div className="row">
          <a className="set" href="#">
            <span className="layer one"><img src="https://placeimg.com/256/256/tech" alt="" /></span>
            <span className="layer two"><img src="https://placeimg.com/256/256/animal" alt="" /></span>
            <span className="layer three">Four</span>
            <img src="https://placeimg.com/256/256/arch" alt="" />
          </a>
          <a className="set" href="#">
            <span className="layer one"><img src="https://placeimg.com/256/256/arch" alt="" /></span>
            <span className="layer two"><img src="https://placeimg.com/256/256/animals" alt="" /></span>
            <span className="layer three">Five</span>
            <img src="https://placeimg.com/256/256/tech" alt="" />
          </a>
          <a className="set" href="#">
            <span className="layer one"><img src="https://placeimg.com/256/256/animal" alt="" /></span>
            <span className="layer two"><img src="https://placeimg.com/256/256/tech" alt="" /></span>
            <span className="layer three">Six</span>
            <img src="https://placeimg.com/256/256/arch" alt="" />
          </a>
        </div>
        {/* Additional rows */}
        <div className="row">
          <a className="set" href="#">
            <span className="layer one"><img src="https://placeimg.com/256/256/tech" alt="" /></span>
            <span className="layer two"><img src="https://placeimg.com/256/256/animal" alt="" /></span>
            <span className="layer three">Seven</span>
            <img src="https://placeimg.com/256/256/arch" alt="" />
          </a>
          <a className="set" href="#">
            <span className="layer one"><img src="https://placeimg.com/256/256/arch" alt="" /></span>
            <span className="layer two"><img src="https://placeimg.com/256/256/animals" alt="" /></span>
            <span className="layer three">Eight</span>
            <img src="https://placeimg.com/256/256/tech" alt="" />
          </a>
          <a className="set" href="#">
            <span className="layer one"><img src="https://placeimg.com/256/256/animal" alt="" /></span>
            <span className="layer two"><img src="https://placeimg.com/256/256/tech" alt="" /></span>
            <span className="layer three">Nine</span>
            <img src="https://placeimg.com/256/256/arch" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;