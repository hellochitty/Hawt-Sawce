import { connect } from 'react-redux';
import { getSauceCompanies, addSauce, updateSauce, getSauce } from '../../actions/sauce_actions';
import SauceForm from './sauce_form.jsx';

const mapStateToProps = ({sauce, companies}, ownProps) => {

  let formType = 'new';
  if(ownProps.params.sauce_id){
    formType = 'edit';
  }

  return {
    sauce,
    formType,
    companies
  };
};

const mapDispatchToProps = dispatch => ({
  getSauceCompanies: () => dispatch(getSauceCompanies()),
  getSauce: (id) => dispatch(getSauce(id)),
  addSauce: (sauce) => dispatch(addSauce(sauce))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SauceForm);
