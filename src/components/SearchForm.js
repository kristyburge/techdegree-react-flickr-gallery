import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


class SearchForm extends Component {
    
    static propTypes = {
        match:      PropTypes.object.isRequired,
        location:   PropTypes.object.isRequired,
        history:    PropTypes.object.isRequired
    }; 
    
    state = {
        search: ''
    };
    
    //handle submit
    handleSubmit = (e) => {
        // don't reload the page
        e.preventDefault();
   
        // pass the search term to App.js function searchTags
        this.props.searchTags(this.state);
        
        // update the url - first get the props from withRouter
        // use destructuring to extract the value from the history property
        const { history } = this.props;
        history.push('/search/' + this.state.search);
        
        // clear the state and likewise, the input field
        this.setState({
          search: '' 
        });
    }
    
    
    // get the search term from the input field
    handleChange = (e) => {
        this.setState({
          search: e.target.value 
        });
    }
    
    render(){
        
        return (


            <form className="search-form" onSubmit={this.handleSubmit}>
                <input type="search" name="search" placeholder="Search" required onChange={this.handleChange} value={this.state.search} />
                <button type="submit" className="search-button">
                    <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </button>
            </form>
        ); 
    }
   
}

export default withRouter(SearchForm);