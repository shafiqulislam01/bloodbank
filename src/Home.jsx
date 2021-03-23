import React from 'react'
import Navbar from './Navbar'
import Pic from './Image/blood1.jpg'
import Pic2 from './Image/blood2.jpg'
import Pic3 from './Image/blood3.jpg'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Navbar />

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Pic} className="d-block w-100" alt="Loading" height='400px' />
          </div>
          <div className="carousel-item">
            <img src={Pic2} className="d-block w-100" alt="Loading" height='400px' />
          </div>
          <div className="carousel-item">
            <img src={Pic3} className="d-block w-100" alt="Loading" height='400px' />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="card text-center">
        <div className="card-header mt-2">
          <b>Todays News</b>
        </div>
        <div className="card-body bg-light">
          <h5 className="card-title"><b>Title 1</b></h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis adipisci sit explicabo deleniti laboriosam nulla praesentium ipsa beatae! Soluta veniam recusandae cumque. Saepe a voluptatem, impedit magni vel alias est nulla deleniti at illum nobis quia ratione, ullam, voluptates aut distinctio maxime veritatis cupiditate consectetur sequi. Totam, quidem fuga. Dicta!</p>
          <NavLink to="/card" className="btn btn-primary">Go somewhere</NavLink>
        </div>
        <div className="card-footer text-muted">
          2 days ago
  </div>
      </div>
      <div className="row">
  <div className="col-sm-6">
    <div className="card mt-3">
      <div className="card-body bg-light">
        <h5 className="card-title"><b>Titile 2</b></h5>
        <p className="card-text" style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut beatae ratione voluptatum a saepe excepturi ea esse atque, culpa, soluta magnam repudiandae dolorum, aperiam voluptate iste! Eligendi illo ullam quam.</p>
        <NavLink to="/card" className="btn btn-primary">Go somewhere</NavLink>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card mt-3">
      <div className="card-body bg-light">
        <h5 className="card-title"><b>Titile 3</b></h5>
        <p className="card-text" style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores vel exercitationem voluptatum similique natus eum nisi a voluptates. Doloribus, tempore est porro totam mollitia dolores adipisci voluptates sit vitae!</p>
        <NavLink to="/card" className="btn btn-primary">Go somewhere</NavLink>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Home;