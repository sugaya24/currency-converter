import React, { Component } from 'react';
import emoji from 'country-code-emoji';

import DisplayResult from './DisplayResult';
import axios from 'axios';

export default class Convert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currencies: [],
      amount: 0.0,
      cur1: 0,
      cur2: 0,
      country1: '',
      country2: ''
    };
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleClickRight = this.handleClickRight.bind(this);
    this.renderAmount = this.renderAmount.bind(this);
  }

  componentDidMount() {
    axios
      .get(`https://api.exchangeratesapi.io/latest?base=USD`)
      .then((res) => {
        const arr = [...Object.entries(res.data.rates)];

        arr.map((data) => {
          axios
            .get(`https://restcountries.eu/rest/v2/currency/${data[0]}`)
            .then((res) => {
              data.push(emoji(res.data[0].alpha2Code));
              this.setState({ currencies: arr });
            });
        });

        return res.data;
      })
      .catch((err) => {});
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
                <option value="">-- Choose a currency --</option>
                {this.state.currencies.map((item) => {
                  return (
                    <option value={[item[0], item[1]]}>
                      {item[0]} - {item[2]}
                    </option>
                  );
                })}
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
                <option value="">-- Choose a currency --</option>
                {this.state.currencies.map((item) => {
                  return (
                    <option value={[item[0], item[1]]}>
                      {item[0]} - {item[2]}
                    </option>
                  );
                })}
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
