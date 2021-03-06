import { connect } from 'react-redux';
import { getSauceCompanies, addSauce, updateSauce, getSauce, deleteSauce } from '../../actions/sauce_actions';
import SauceForm from './sauce_form.jsx';
import { clearErrors } from '../../actions/util_actions';

const mapStateToProps = ({sauce, companies, errors}, ownProps) => {
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
    ready,
    errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let submitAction = addSauce;
  if(ownProps.params.sauce_id > 0){
    submitAction = updateSauce;
  }
  return ({
    getSauceCompanies: () => dispatch(getSauceCompanies()),
    getSauce: (id) => dispatch(getSauce(id)),
    deleteSauce: (sauceId) => dispatch(deleteSauce(sauceId)),
    submitAction: (sauce, id) => dispatch(submitAction(sauce, id)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SauceForm);
