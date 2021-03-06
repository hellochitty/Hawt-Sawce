import { connect } from 'react-redux';
import { getCheckin, removeCheckin, addComment, removeComment } from '../../actions/checkin_actions';
import Checkin from './checkin.jsx';

const mapStateToProps = ({checkin, session}) => {
  return {
    checkin,
    session
  };
};

const mapDispatchToProps = dispatch => ({
  getCheckin: (id) => dispatch(getCheckin(id)),
  removeCheckin: (id) => dispatch(removeCheckin(id)),
  addComment: (comment) => dispatch(addComment(comment)),
  removeComment: (comment) => dispatch(removeComment(comment))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkin);
