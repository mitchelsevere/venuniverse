import React from 'react';
import '../stylesheets/SearchListings.css';

const SearchListings = (props) => {
  return (
    <div className="listings-wrapper">
      <div className="search-listings">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto" src="http://placeimg.com/500/500/any/grayscale" alt="Generic placeholder image"/>
          </div>
        </div>

        <hr />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="featurette-image img-fluid mx-auto" src="http://placeimg.com/500/500/any/grayscale" alt="Generic placeholder image"/>
          </div>
        </div>

        <hr />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto" src="http://placeimg.com/500/500/any/grayscale" alt="Generic placeholder image"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchListings;