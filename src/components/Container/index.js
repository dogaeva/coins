import Container from './Container';
import { getCoins } from '../../actions/coins';
import { connect } from 'react-redux';

const mapStateToProps = ({ coins: { coins, isFetching } }) => ({
  coins,
  isFetching
});

const mapActionsToProps = {
  getCoins
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Container);
