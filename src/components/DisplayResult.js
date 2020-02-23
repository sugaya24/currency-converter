import React, { Component } from 'react';

export default class DisplayResult extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let res = ((this.props.cur2 / this.props.cur1) * this.props.amount).toFixed(
      2
    );
    res = isNaN(res) ? parseFloat(0).toFixed(2) : res;
    let amount = parseFloat(this.props.amount).toFixed(2);
    amount = isNaN(amount) ? parseFloat(0).toFixed(2) : amount;
    return (
      <div className="row">
        <div className="col-md-2"></div>
        <h2 className="col-md-5">
          {amount} {this.props.country1}
        </h2>
        <h2 className="col-md-5">
          {res} {this.props.country2}
        </h2>
      </div>
    );
  }
}
