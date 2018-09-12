import React, { Component } from 'react';
import apiKey from './config.js';
import axios from 'axios';

import SearchForm from './components/SearchForm';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';

class App extends Component {
  
  state = {
    photos: [], 
    tag: 'farm life'
  }; 
  
  
  componentDidMount(){
    // this is asynchronous and returns a promise
    // .then() method only runs when the get request is completed.
    // pass a callback function to the .then() method which takes the response object
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&media=photo&tags=${this.state.tag}&per_page=10&format=json&nojsoncallback=1`)
      .then(res => {
        // console.log(res.data.photos.photo);
        this.setState({
            photos: res.data.photos.photo
        });
    });
  
  }
  
  // create a function to accept the search term
  searchTags = (searchTermObj) => {
    this.setState({
      tag: searchTermObj.search
    });

    // UPDATE AND MAKE A NEW CALL TO THE API ENDPOINT
    
  }
  
  render() {
    return (
      <div className="container">

        <SearchForm searchTags={this.searchTags} /> 
        <Navbar /> 
        <Gallery photos={this.state.photos} /> 
  
      </div>
    );
  }
}

export default App;
