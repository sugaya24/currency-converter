import React, { Component } from 'react';

import currencyData from '../currencyData';
import DisplayResult from './DisplayResult';

export default class Convert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0.0,
      cur1: 0,
      cur2: 0,
      country1: '-',
      country2: '-',
      rate: 0
    };
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleClickRight = this.handleClickRight.bind(this);
    this.renderAmount = this.renderAmount.bind(this);
  }

  handleClickLeft(event) {
    // console.log(`left: ${event.target.value}`);
    this.setState({
      country1: event.target.value.split(',')[0],
      cur1: event.target.value.split(',')[1]
    });
  }

  handleClickRight(event) {
    // console.log(`right: ${event.target.value}`);
    this.setState({
      country2: event.target.value.split(',')[0],
      cur2: event.target.value.split(',')[1]
    });
  }

  renderAmount(event) {
    this.setState({ amount: event.target.value });
  }

  render() {
    const currencies = Object.entries(currencyData.quotes).map((data) => {
      const country = data[0]
        .split('')
        .slice(3, 6)
        .join('');
      const cur2 = data[1];
      return (
        <option key={country} value={[country, cur2]}>
          {country}
        </option>
      );
    });

    return (
      <div className="convert-container">
        <h1>Convert</h1>
        <div className="row">
          <div className="col-md-2">
            <input
              className="form-control"
              type="number"
              onChange={this.renderAmount}
            ></input>
          </div>
          <div className="col-md-5">
            <form>
              <select
                className="form-control"
                value={this.state.item}
                onChange={this.handleClickLeft}
              >
                <option value="-">-</option>
                {currencies}
              </select>
            </form>
          </div>
          <div className="col-md-5">
            <form>
              <select
                className="form-control"
                value={this.state.item}
                onChange={this.handleClickRight}
              >
                <option value="-">-</option>
                {currencies}
              </select>
            </form>
          </div>
        </div>

        <DisplayResult
          amount={this.state.amount}
          cur1={this.state.cur1}
          cur2={this.state.cur2}
          country1={this.state.country1}
          country2={this.state.country2}
        />
      </div>
    );
  }
}
