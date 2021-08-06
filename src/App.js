import React, { Component } from 'react';
import './App.css';
import Pokegame from './Pokegame';

let refreshPage = () => {
  window.location.reload(false);
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Button">
          <button onClick={refreshPage}>Click to Play Again!</button>
        </div>
        <Pokegame />
      </div>
    );
  }
}

export default App;
