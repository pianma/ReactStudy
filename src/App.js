import React from "react";

class App extends React.Component {
  constructor(props){
    super(props);
    console.log('hello');
  }
  state = {
    count : 0,
  };

  up = () => {
    this.setState({ count : this.state.count + 1});
  };

  down = () => {
    this.setState({count : this.state.count - 1});
  };

  componentDidMount(){
    console.log('component rendered');
  }

  componentDidUpdate(){
    console.log('i just update');
  }

  componentWillUnmount() {
    console.log('Goodbye');
  }

  render(){
    console.log('render');
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
