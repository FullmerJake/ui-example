import React from 'react';

class GoogleMap extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        contentVisible: true
      };
    }
  
    render() {
        
        if(trajectoryClicked) {
            
            return (
                <iframe
                    width="600"
                    height="450"
                    style="border:0"
                    loading="lazy"
                    allowfullscreen
                    src="https://www.google.com/maps/embed/v1/place?q=Space+Needle,Seattle+WA">
                </iframe>
            );
        }
    }
  }
  
  export default GoogleMap;