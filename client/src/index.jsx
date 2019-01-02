import React from 'react';
import ReactDOM from 'react-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import $ from 'jquery';
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
        const reservationScript = document.createElement('script');
        reservationScript.type = 'text/javascript';
        reservationScript.text = response.data;
        $('head').append(reservationScript);
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
