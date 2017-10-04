import React from 'react';
import people from '../media/people.mp4';
import '../stylesheets/Index.css';

const Index = () => {
  return (
    <div className="home-wrapper">
      <video autoPlay muted loop>
        <source src="../media/people.webm" type="video/webm" />
        <source src={people} type="video/mp4" />
      </video>
      <div className="cover-container">
        <div className="inner cover">
          <h1 className="cover-heading">Cover your page.</h1>
          <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
          <form className="container">
            <div className="row">
              <div className="col-md-4 mb-3">
                <input type="text" className="form-control" placeholder="City" />
              </div>
              <div className="col-md-4 mb-3">
              <select className="custom-select search-select" id="inlineFormCustomSelect">
                  <option defaultValue>Search State</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <select className="custom-select search-select" id="inlineFormCustomSelect">
                  <option defaultValue>Select Venue</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <button className="btn btn-primary search-btn" type="submit">Submit form</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Index;