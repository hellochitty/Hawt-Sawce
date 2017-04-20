import { connect } from 'react-redux';
import { clearErrors } from '../../actions/util_actions';
import Sauce from './sauce.jsx';

const mapStateToProps = ({sauces}, ownProps)=>({
  sauce: sauces[ownProps.params.sauce_id]
});

export default connect(
  mapStateToProps
)(Sauce);
