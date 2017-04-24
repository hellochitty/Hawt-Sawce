import { connect } from 'react-redux';
import { getCheckins } from '../../actions/checkin_actions';
import CheckinIndex from './checkin_index.jsx';

const mapStateToProps = ({checkins}) => {
  const holder = [];
  Object.keys(checkins).forEach((key)=> holder.push(checkins[key]));
  return {
    checkins: holder.sort(function(a, b) {
    return b.id - a.id;})
  };
};

const mapDispatchToProps = dispatch => ({
  getCheckins: () => dispatch(getCheckins())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinIndex);
