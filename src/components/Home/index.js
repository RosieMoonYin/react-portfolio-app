import './index.scss';

const Home = ()=> {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi,<br/> I'm
                Rosie Burnett <br/>
                web developer
                </h1>
                <h2>
                Frontend developer / Javascript / REACT
                </h2>
                <Link to="/contact" className="flat-button"> CONTACT ME</Link>
            </div>
        </div>
    );

};

export default Home;