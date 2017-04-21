import { connect } from 'react-redux';
import { getSauceCompanies, addSauce, updateSauce, getSauce, deleteSauce } from '../../actions/sauce_actions';
import SauceForm from './sauce_form.jsx';

const mapStateToProps = ({sauce, companies}, ownProps) => {
  let formType = 'new';
  let ready = false;
  if(ownProps.params.sauce_id > 0){
    formType = 'edit';
  }
  if(ownProps.params.sauce_id == sauce.id){
    ready = true;
  }

  return {
    sauce,
    formType,
    companies,
    ready
  };
};

const mapDispatchToProps = dispatch => ({
  getSauceCompanies: () => dispatch(getSauceCompanies()),
  getSauce: (id) => dispatch(getSauce(id)),
  addSauce: (sauce) => dispatch(addSauce(sauce)),
  deleteSauce: (sauceId) => dispatch(deleteSauce(sauceId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SauceForm);
