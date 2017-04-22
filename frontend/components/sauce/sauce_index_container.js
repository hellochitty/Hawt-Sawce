import { connect } from 'react-redux';
import { getSauces } from '../../actions/sauce_actions';
import SauceIndex from './sauce_index.jsx';

const mapStateToProps = ({sauces, session}) => {
  const holder = [];
  Object.keys(sauces).forEach((key)=> holder.push(sauces[key]));
  return {
    sauces: holder,
    session: session
  };
};

const mapDispatchToProps = dispatch => ({
  getSauces: () => dispatch(getSauces())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SauceIndex);
