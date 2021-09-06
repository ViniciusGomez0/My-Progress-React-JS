
import React from 'react';
import './App.css';


class App extends React.Component {
  state = {
    name: 'Vinicius Gomez',
    counter: 0 
  };

  render() {
    const { name, counter }  = this.state;
    
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;