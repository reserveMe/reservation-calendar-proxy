import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
}

if (typeof window !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById('app'));
}
