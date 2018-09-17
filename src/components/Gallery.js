import React from 'react';
import Photo from './Photo';

// Create a Gallery container component
const Gallery = ({photos, tag, loading}) => {

    // check to make sure there are photos
    const photoList = photos.length ? (
        // if true, map over the photoList array to return a list element
        // by passing props to the Photo component
        photos.map( photo => {
            return (
                <Photo data={photo} key={photo.id} />
            ); 
        })
        
    ) : ( // if false, return 'not found' list element
        
        <li className="not-found">
          <h3>No Results Found</h3>
          <p>You search did not return any results. Please try again.</p>
        </li>
        
    ); 
    
    return(
        <div className="photo-container">
          <h2>Results for {tag}</h2>
          <ul>
            {photoList}
          </ul>
        </div>  
    );
    
}


export default Gallery; 