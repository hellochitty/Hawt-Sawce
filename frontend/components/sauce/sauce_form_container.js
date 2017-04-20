import { connect } from 'react-redux';
import { getSauces, createSauce, updateSauce } from '../../actions/sauce_actions';
import SauceForm from './sauce_form.jsx';

const mapStateToProps = ({sauces}) => {
  const holder = [];
  Object.keys(sauces).forEach((key)=> holder.push(sauces[key]));
  return {
    sauces: holder
  };
};

const mapDispatchToProps = dispatch => ({
  getSauces: () => dispatch(getSauces())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SauceForm);
