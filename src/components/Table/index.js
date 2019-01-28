import React, { Component } from 'react';
import './Table.scss';
import { connect } from 'react-redux';
import Pt from 'prop-types';
import { getCoins } from '../../actions/coins';
import Price from 'react-forex-price';
import Spin from '../Spin';
import { Table } from 'antd';

const columns = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    width: '30%'
  },
  {
    title: 'Стоимость',
    dataIndex: 'priceUsd',
    key: 'priceUsd',
    render: priceUsd => (
      <div className="table__price">
        <Price amount={priceUsd} rounding={Math.ceil} />
      </div>
    ),
    width: '20%'
  },

  {
    title: 'Рыночная капитализация',
    dataIndex: 'marketCapUsd',
    key: 'marketCapUsd',
    render: marketCapUsd => (
      <div className="table__price">
        <Price amount={marketCapUsd} rounding={Math.ceil} />
      </div>
    ),
    width: '30%'
  },
  {
    title: 'Суточный объем',
    key: 'volumeUsd24Hr',
    dataIndex: 'volumeUsd24Hr',
    render: volumeUsd24Hr => (
      <div className="table__price">
        <Price amount={volumeUsd24Hr} rounding={Math.ceil} />
      </div>
    ),
    width: '20%'
  }
];

class TableContainer extends Component {
  componentDidMount () {
    this.props.getCoins();
  }

  render () {
    const { coins, isFetching } = this.props;
    return (
      <div className="table__container">
        <div className="spin">
          <Spin show={isFetching} />
        </div>
        {coins ? (
          <Table
            columns={columns}
            dataSource={coins}
            pagination={false}
            scroll={{ y: 'calc(100vh - 230px)' }}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = ({ coins: { coins, isFetching } }) => ({
  coins,
  isFetching
});

const mapActionsToProps = {
  getCoins
};

TableContainer.propTypes = {
  getCoins: Pt.func,
  coins: Pt.array,
  isFetching: Pt.bool
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(TableContainer);
