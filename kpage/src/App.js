import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"



class App extends Component {

  constructor() {
    super()
    this.state = {
      resources: ""
    }
  }

  componentDidMount () {
    fetch('https://geoip-db.com/json/')
      .then(response => response.json())
     .then (json => 
           this.setState({
           resources: json
      }))
   } 

  render() {

    return (
<div className="App">
<nav className="site-header sticky-top py-1">
      <div className="container d-flex flex-column flex-md-row justify-content-between">
        <div className="py-2" href="#">kolesnyk</div>

      </div>
    </nav>
    {/* ({this.state.resources.latitude}, {this.state.resources.longitude}) */}
    <div className="container">
      <div className="row">
      <div className="col-md-6">
              <div className="card mb-4 box-shadow">
              <img className="card-img-top" src="https://cdn-images-1.medium.com/max/1600/1*d2MAPp7120q_8x6Ue8KYmQ.png" alt="Card image cap"></img>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            
        </div>
        </div>

    </div>
    );
  }
}

export default App;
