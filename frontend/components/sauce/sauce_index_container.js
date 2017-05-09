import { connect } from 'react-redux';
import { getSauces, getSaucesOrder } from '../../actions/sauce_actions';
import SauceIndex from './sauce_index.jsx';

const mapStateToProps = ({sauces, saucesOrder, session}) => {
  const holder = saucesOrder.map((sauceId) => sauces[sauceId]) || [];
  return {
    sauces: holder,
    session: session
  };
};

const mapDispatchToProps = dispatch => ({
  getSauces: () => dispatch(getSauces()),
  getSaucesOrder: (orderId) => dispatch(getSaucesOrder(orderId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SauceIndex);
