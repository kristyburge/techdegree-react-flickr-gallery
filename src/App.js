import React, { Component } from 'react';
import apiKey from './config.js';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchForm from './components/SearchForm';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';


// This is the main Container component that handles keyword, api key, and fetches photos from the API
class App extends Component {
  
  constructor(){
    super(); 
    
    this.state = {
      photos: [], 
      tag: 'hiking',
      loading: true
    }; 
    
  }
  
  componentDidMount(){
    // this is asynchronous and returns a promise
    // .then() method only runs when the get request is completed.
    // pass a callback function to the .then() method which takes the response object
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&media=photo&tags=${this.state.tag}&safe_search=1&per_page=12&format=json&nojsoncallback=1`)
      .then(res => {
        // console.log(res.data.photos.photo);
        // update loading state
        this.setState({
            photos: res.data.photos.photo,
            loading: false
        });
    });
  
  }
  
  componentDidUpdate(prevProps, prevState) {

  // check if previous props matches current props; if now, refetch the data and re-render the pictures
  if (this.state.tag !== prevState.tag) {
     
     this.setState({ loading: true }); 
     
     axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&media=photo&tags=${this.state.tag}&safe_search=1&per_page=12&format=json&nojsoncallback=1`)
      .then(res => {
        // set the state to the new photos array
        this.setState({
            photos: res.data.photos.photo,
            tag: this.state.tag,
            loading: false
        });
    });
  }
}
  
  // create a function to accept the search term
  searchTags = (searchTermObj) => {
    this.setState({
      tag: searchTermObj.search
    });

  }
  
  // this function updates the tag when a user clicks the nav buttons
  addTag = (button) => {
    this.setState({
      tag: button
    });
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          
          <SearchForm searchTags={this.searchTags} /> 
          <Navbar addTag={this.addTag} />
          
          { /* Test the loading state before rendering the Gallery component inside the Routes */}
          
          {   (this.state.loading) 
              ? (<p>Loading results...</p>)
              : (
                <Switch>
                  <Route exact path="/" render={ () => <Gallery photos={this.state.photos} tag={this.state.tag} loading={this.state.loading} />} />
                  <Route path="/search/:topic" render={ () => <Gallery photos={this.state.photos} tag={this.state.tag} loading={this.state.loading} />} />
                  <Route component={NotFound} />
                </Switch>
              )
          }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
