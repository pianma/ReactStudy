import React from "react";

class App extends React.Component {
  state = {
    count : 0,
  };

  up = () => {
    this.setState({ count : this.state.count + 1});
  };

  down = () => {
    this.setState({count : this.state.count - 1});
  };

  render(){
    return (
    <div>
     <h1>the number is {this.state.count}</h1>
    <button onClick={this.up}>up</button>
    <button  onClick={this.down}>down</button>
    </div>
    );
  }
}

export default App;
