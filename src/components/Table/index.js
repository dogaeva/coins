import React from 'react';
import { array, bool } from 'prop-types';
import Price from 'react-forex-price';
import Spin from '../Spin';
import { Table } from 'antd';

import './Table.scss';

const columns = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    width: '20%'
  },
  {
    title: 'Стоимость',
    dataIndex: 'priceUsd',
    key: 'priceUsd',
    render: priceUsd => (
      <Price amount={priceUsd} rounding={num => parseFloat(num).toFixed(3)} />
    ),
    width: '25%'
  },

  {
    title: 'Рыночная капитализация',
    dataIndex: 'marketCapUsd',
    key: 'marketCapUsd',
    render: marketCapUsd => (
      <Price amount={marketCapUsd} rounding={Math.floor} dropCents />
    ),
    width: '30%'
  },
  {
    title: 'Суточный объем',
    key: 'volumeUsd24Hr',
    dataIndex: 'volumeUsd24Hr',
    render: volumeUsd24Hr => (
      <Price amount={volumeUsd24Hr} rounding={Math.floor} dropCents />
    ),
    width: '25%'
  }
];

const TableContainer = ({ isFetching, data }) => (
  <div className="table__container">
    {isFetching ? (
      <div className="spin">
        <Spin />
      </div>
    ) : null}
    {data ? (
      <Table columns={columns} dataSource={data} pagination={false} />
    ) : null}
  </div>
);

TableContainer.propTypes = {
  data: array,
  isFetching: bool
};

export default TableContainer;
