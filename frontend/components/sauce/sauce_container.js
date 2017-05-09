import { connect } from 'react-redux';
import { clearErrors } from '../../actions/util_actions';
import { getSauce } from '../../actions/sauce_actions';
import { getCheckins, addCheckin } from '../../actions/checkin_actions';
import Sauce from './sauce.jsx';

const mapStateToProps = ({sauce, checkins, session}, ownProps)=> {
  const holder = [];
  const userImages = [];
  Object.keys(checkins).forEach((key)=> {
      if (sauce.name === checkins[key].sauce){
        holder.push(checkins[key]);
        userImages.push(checkins[key].image_url);
      }
    });
  return({
    sauce,
    checkins: holder.sort(function(a, b) {
    return b.id - a.id;}),
    session,
    userImages
  });
};

const mapDispatchToProps = dispatch =>({
  getSauce: (sauceId) => dispatch(getSauce(sauceId)),
  getCheckins: () => dispatch(getCheckins()),
  addCheckin: (checkin) => dispatch(addCheckin(checkin))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sauce);
