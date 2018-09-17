import React from 'react'; 

// pass the props down from Gallery to Photo
const Photo = props => {

    // return the markup for each list item with image url
    return (
        <li key={props.data.id}>
            <img src={'https://farm' + props.data.farm + '.staticflickr.com/' + props.data.server + '/' + props.data.id + '_' + props.data.secret + '_m.jpg'} alt={props.data.title} />
        </li>
    );

}

export default Photo; 