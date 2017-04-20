import { connect } from 'react-redux';
import { clearErrors } from '../../actions/util_actions';
import { getSauce } from '../../actions/sauce_actions';
import Sauce from './sauce.jsx';

const mapStateToProps = ({sauce}, ownProps)=>({
  sauce
});


const mapDispatchToProps = dispatch =>({
  getSauce: (sauceId) => dispatch(getSauce(sauceId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sauce);
