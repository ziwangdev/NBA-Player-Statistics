import React, { Component } from 'react';
import TopBar from './TopBar';
import Main from './Main';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Main />
        <h4 className={"DevelopedBy"}>Developed by Zi Wang using React. Click <a>here</a> to read more.</h4>
      </div>
    );
  }
}

export default App;
