import { connect } from 'react-redux';
import { getCheckin } from '../../actions/checkin_actions';
import Checkin from './checkin.jsx';

const mapStateToProps = ({checkin}) => {
  return {
    checkin
  };
};

const mapDispatchToProps = dispatch => ({
  getCheckin: () => dispatch(getCheckin())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkin);
