
import React from 'react';
import './App.css';


class App extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'O título 1',
        corpo: 'O corpo 1'
      },
      {
        id: 2,
        title: 'O título 2',
        corpo: 'O corpo 2'
      },
      {
        id: 3,
        title: 'O título 3',
        corpo: 'O corpo 3'
      },
    ]
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