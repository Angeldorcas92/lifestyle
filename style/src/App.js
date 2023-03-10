// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

class App extends Component {
  state = {
    person: {
      fullName: 'Angel Dorcas',
      Bio : 'Being the best i can ',
      imgSrc: `https://nationaltoday.com/wp-content/uploads/2022/10/Nicki-Minaj-1200x834.jpg ` , 
      Profession : 'Software Engineer',
    },
    Show: 'false',
    timeInterval: 0,
  };

  componentDidMount () {
    this.interval=setInterval (
      () => this.setState({ timeInterval: this. state.timeInterval + 1 }),
      1000
      );
  }
  componentWillUnmount () {
    clearInterval (this.interval);
  }
  handleToggle = () => {
    this.setState({shows: !this.state. shows});
  };
  render() {
    return (
      <div className='App'>
        <button onClick={this.handleToggle}>Toggle Profile</button>
        {this.state.shows && (
          <div>
            <h1>{this.state.person.fullName}</h1>
            <h3>{this.state.person.Bio}</h3>
            <img src={this.state.person.imgSrc} alt="Profile" style={{width:'350px'}} />
            <p>{this.state.person.Profession}</p>
          </div>
        )}
        <p>Time since mount: {this.state.timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;


