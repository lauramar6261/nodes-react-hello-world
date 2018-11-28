import React, { Component } from 'react';

class NameDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      displayName: true,
    };
  }


  renderDisplayName = () => {
    if (this.state.displayName) {
      return (
      <div>
       <h3> Hellow, {this.state.name} </h3>
       <span> Change your name: <input onChange={this.onNameChange}/></span>
      </div>
      )
    } else {
      return <h3> I don't know how to display the name </h3>
    }
  }
  onButtonClick = () => {
    this.setState({ displayName: !this.state.displayName });
  }

  onNameChange = (event) => {
   this.setState({ name: event.target.value });
  }
  render() {
      return (
        <div>
        {this.renderDisplayName()}
          <button onClick={ this.onButtonClick }>Toggle Display</button>
        </div>
      );
  }
}

export default NameDisplay
