import React from 'react';

function About() {
  return (
    <div className='container'>
      <br />
    <div className="text-center">
      <div className="jumbotron">
        <h1 className="display-4">About Us</h1>
        <p className="lead">Bat City Productions is an Austin, Texas-based production company founded in 2023 by Kaity Hayes.</p>
        <hr className="my-4" />
        <p>We specialize in producing high-quality shows featuring the best local talent, and we are committed to creating a fun and inclusive atmosphere for all.</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Our Mission</h2>
            <p>At Bat City Productions, our mission is to provide a platform for local talent to showcase their skills and entertain audiences of all ages. We believe in fostering a supportive and inclusive community that encourages artistic expression and creativity.</p>
          </div>
          <div className="col-md-6">
            <h2>Our Team</h2>
            <p>Our team is comprised of experienced producers, directors, and technicians who are passionate about the arts and dedicated to creating memorable experiences for our audiences. We work closely with local performers and artists to develop and produce shows that are unique, engaging, and entertaining.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="https://i.imgur.com/M3PVl9p.png" className="card-img" alt="Bat City Productions building" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Our Location</h5>
                    <p className="card-text">Our offices and production facilities are located in downtown Austin, just a short walk from the famous 6th Street entertainment district and the cultural Red River Music district. Stop by and say hello!</p>
                    <p className="card-text"><small className="text-muted">Last updated Sun Apr 23 5:02PM </small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export { About }