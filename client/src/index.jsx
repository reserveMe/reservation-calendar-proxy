import React from 'react';
import ReactDOM from 'react-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
const axios = require('axios');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const id = document.URL.split('/')[4];
    axios.get(`/buildPage/restaurants/${id}/`)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        throw err;
      });
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
