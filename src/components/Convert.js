import React, { Component } from 'react';

import currencyData from '../currencyData';

export default class Convert extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event.target.value);
  }

  render() {
    const currencies = Object.keys(currencyData.quotes).map((currency) => {
      return (
        <option key={currency} value={currency}>
          {currency}
        </option>
      );
    });

    return (
      <div>
        <h1>Convert</h1>
        <form>
          <select
            className="form-control"
            value={this.state.item}
            onChange={this.handleClick}
          >
            {currencies}
          </select>
        </form>
      </div>
    );
  }
}
