import React from 'react';
import './App.css';

class App extends React.Component {

  render() {
    // long process
    let fakeProcessing = 0;
    for(let i = 0 ; i < 2000000000 ; i++) {
      fakeProcessing = fakeProcessing + 1;
    }
    // console.log('end processing');
    return (
      <div>
        My app
      </div>
    );   
  }
}

export default App;