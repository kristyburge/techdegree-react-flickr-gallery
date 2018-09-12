import React from 'react';

const Gallery = ({ photos }) => {
    console.log(photos);
    // check to make sure there are photos
    const photoList = photos.length ? (
        // if true, map over the photoList array and return a list element
        photos.map( photo => {
            return (
                <li key={photo.id}>
                    <img src={'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg'} alt={photo.title} />
                </li>
            ); 
        })
        
    ) : ( // if false, return 'not found' element
        
        <li className="not-found">
          <h3>No Results Found</h3>
          <p>You search did not return any results. Please try again.</p>
        </li>
        
    ); 
    
    return(
        <div className="photo-container">
          <h2>Results</h2>
          <ul>
            {photoList}
          </ul>
        </div>  
    );
    
}


export default Gallery; 