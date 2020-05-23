import React, { Component } from 'react';
import './App.css';

function transform(offset) {
  const cos = Math.cos(offset);
  const sin = Math.sin(offset);
  return { transform: 
  `matrix3d(${sin}, ${-cos}, ${sin}, 0,
    ${-cos}, ${sin}, 0, 0, 0, ${cos},
    ${cos}, ${sin}, 0, 0, 0, 1)`
  };
}

class App extends Component {
  state = { styleOne : {}, styletwo: {}};

  onMouseMove = (event) => {
    this.setState({
      styleOne: transform(-event.clientX / event.clientY),
      styletwo: transform(event.clientX / event.clientY),
    })
  }

  render() {
    return (
      <div onMouseMove={this.onMouseMove} >
        <div className="panel" style={ this.state.styleOne } ></div>
        <div className="panel" style={ this.state.styletwo } ></div>
      </div>
    );
  }
}

export default App;