import React, { Component } from 'react';
import Table from '../Table';
import { func, array, bool } from 'prop-types';

import './Container.scss';

class Container extends Component {
  propTypes = {
    getCoins: func,
    coins: array,
    isFetching: bool
  };
  state = {
    coins: null
  };
  componentDidMount () {
    this.props.getCoins();

    const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=ALL');

    pricesWs.onmessage = msg => {
      const data = JSON.parse(msg.data);
      this.setState({
        coins: this.state.coins.map(coin => {
          if (data[coin.id]) {
            coin.priceUsd = data[coin.id];
          }
          return coin;
        })
      });
    };
  }

  componentWillReceiveProps (props) {
    if (props.coins) {
      this.setState({ coins: props.coins });
    }
  }
  render () {
    const { isFetching } = this.props;
    const { coins } = this.state;
    return (
      <div className="background">
        <div className="background__top" />
        <div className="container">
          <header>Курсы криптовалют 💸</header>
          <Table isFetching={isFetching} data={coins} />
        </div>
      </div>
    );
  }
}

export default Container;
