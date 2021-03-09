import React from 'react';

class MenuTwo extends React.Component {
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
            Enter Forms
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
          <form>
                <label >
                  Name: 
                  <input type="text" name="name" style={{margin: 2}}/>
                </label>
                <input type="submit" value="Submit" />
              </form>
          </div>
          <div className="list_item_container">
            <p> Select a City </p>
          <select style={{margin: 6}}>
            <option value="newYork">New York</option>
            <option value="chicago">Chicago</option>
            <option selected value="saltLake">Salt Lake City</option>
            <option value="losAngeles">Los Angeles</option>
          </select>
          </div>
          <div className="list_item_container">
            <p>Upload CRV</p>
            <input type="file" />
          </div>
        </div>
      </div>
    );
  }
}

export default MenuTwo;
