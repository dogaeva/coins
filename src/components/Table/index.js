import React, { Component } from 'react';
import './Table.scss';
import ReactTable from 'react-table';
import { connect } from 'react-redux';
import Pt from 'prop-types';
import {getCoins} from '../../actions/coins';
import Price from 'react-forex-price';
import Spin from '../Spin';

class Table extends Component {
  componentDidMount () {
    this.props.getCoins();
  }

  render () {
    const mobile = window.outerWidth < 670;
    const columns = [{
      Header: 'Название',
      accessor: 'name'
    }, {
      Header: 'Стоимость',
      accessor: 'priceUsd',
      Cell: row => <Price amount={row.value} rounding={Math.ceil} />
    }, {
      Header: 'Рыночная капитализация',
      accessor: 'marketCapUsd',
      Cell: row => <Price amount={row.value} rounding={Math.ceil} />,
      show: !mobile
    }, {
      Header: 'Суточный объем',
      accessor: 'volumeUsd24Hr',
      Cell: row => <Price amount={row.value} rounding={Math.ceil} />,
      show: !mobile
    }];
    const {coins, isFetching} = this.props;
    return <div>
      <div className="spin">
        <Spin show={isFetching}/>
      </div>
      {coins ? <ReactTable
        data={coins}
        columns={columns}
        minRows={0}
        showPagination={false}
      /> : null}
    </div>
    ;
  }
}

const mapStateToProps = ({
  coins: { coins, isFetching }
}) => ({
  coins,
  isFetching
});

const mapActionsToProps = {
  getCoins
};

Table.propTypes = {
  getCoins: Pt.func,
  coins: Pt.array,
  isFetching: Pt.bool
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Table);

