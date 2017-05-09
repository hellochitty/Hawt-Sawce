import { connect } from 'react-redux';
import Sidebar from './sidebar';

const mapStateToProps = ({session}) => {
  return {
    session
  };
};

export default connect(
  mapStateToProps
)(Sidebar);
