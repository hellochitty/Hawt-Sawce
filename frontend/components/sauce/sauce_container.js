import { connect } from 'react-redux';
import { clearErrors } from '../../actions/util_actions';
import { getSauce } from '../../actions/sauce_actions';
import { getCheckins } from '../../actions/checkin_actions';
import Sauce from './sauce.jsx';

const mapStateToProps = ({sauce, checkins}, ownProps)=> {
  const holder = [];
  Object.keys(checkins).forEach((key)=> {
      if (sauce.name === checkins[key].sauce){
        holder.push(checkins[key]);
      }
    });
  return({
    sauce,
    checkins: holder
  });
};


const mapDispatchToProps = dispatch =>({
  getSauce: (sauceId) => dispatch(getSauce(sauceId)),
  getCheckins: () => dispatch(getCheckins())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sauce);
