import { connect } from 'react-redux';
import { getUser } from '../../actions/user_actions';
import User from './user.jsx';

const mapStateToProps = ({user, checkins, sauces}, ownProps)=> {
  const checkinsHolder = [];
  const saucesHolder = [];
  Object.keys(checkins).forEach((key)=> {
    checkinsHolder.push(checkins[key]);
    });
  Object.keys(sauces).forEach((key)=> {
    saucesHolder.push(sauces[key]);
    });
  return({
    user,
    checkins: checkinsHolder.sort(function(a, b) {
    return b.id - a.id;}),
    sauces: saucesHolder
  });
};


const mapDispatchToProps = dispatch =>({
  getUser: (userId) => dispatch(getUser(userId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
