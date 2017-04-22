import { connect } from 'react-redux';
import { getCheckins } from '../../actions/checkin_actions';
import CheckinIndex from './checkin_index.jsx';

const mapStateToProps = ({checkins, session}) => {
  const holder = [];
  Object.keys(checkins).forEach((key)=> holder.push(checkins[key]));
  return {
    checkins: holder,
    session: session
  };
};

const mapDispatchToProps = dispatch => ({
  getCheckins: () => dispatch(getCheckins())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinIndex);
