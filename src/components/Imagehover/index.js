import React from 'react';
import blackAndWhiteImage from '../images/rosie-BnW.jpg';
import colorImage from '../images/rosie-color.jpg';


const Imagehover = () => {
    return (
        <div>
          <h2>My Image Component</h2>
          <div className="image-container">
            <img
              src={blackAndWhiteImage}
              alt="Example"
              className="image"
              onMouseOver={(e) => (e.currentTarget.src = colorImage)}
              onMouseOut={(e) => (e.currentTarget.src = blackAndWhiteImage)}
            />
          </div>
        </div>
      );
    };

export default Imagehover;