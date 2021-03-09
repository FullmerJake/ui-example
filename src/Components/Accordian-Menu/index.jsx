import React from 'react';

class AccordionMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentVisible: true
    };
    // bind event handler methods here (defined below) for callback to work
    this.toggleContentVisible = this.toggleContentVisible.bind(this);
  }

  toggleContentVisible() {
    // called at onClick of accordion button
    // toggles contentVisible between true and false
    this.setState((prevState) => {
      return { contentVisible: !prevState.contentVisible };
    });
  }

  // trajectoryClicked() {
  //         return (
  //             <iframe
  //                 width="600"
  //                 height="450"
  //                 style="border:0"
  //                 loading="lazy"
  //                 allowfullscreen
  //                 src="https://www.google.com/maps/embed/v1/place?q=Space+Needle,Seattle+WA">
  //             </iframe>
  //         );
  // };


  render() {
    return (
      <div className="accordion_container">
        <div className="accordion">
          {/* when button clicked, toggle the contentVisible value in our state*/}
          <button
            type="button"
            className="accordion_title"
            onClick={this.toggleContentVisible}
          >
            Select an Action
          </button>
        </div>
        {/* For the below Div hide / show:
            Using string literals, and a ternary if check on our states contentVisible value,
            we append the .show_content CSS class if contentVisible === true
            else we append the empty string if contentVisible === false
            Note: We are just combining multiple CSS classes here to create different effects
            Same as how we use CSS class combination in regular web pages to create visuals.
        */}
        <div
          className={`accordion_content ${
            this.state.contentVisible ? "show_content" : ""
          }`}
        >
          <div className="list_item_container">
            <p>Add a Vehicle</p>
          </div>
          <div className="list_item_container">
            <p>Add a Bunker</p>
          </div>
          <div className="list_item_container">
            <button >Select a Trajectory</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AccordionMenu;
