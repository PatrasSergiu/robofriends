import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <div className="pa2">
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="text"
          placeholder="Search robot"
          onChange={this.props.searchChange}
        />
      </div>
    );
  }
}

export default SearchBox;