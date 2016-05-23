import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PhoneBook from '../components/PhoneBook';
import * as PhoneBookActions from '../actions/phone_book';

function mapStateToProps(state) {
  return {
    phone_book: state.phone_book
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PhoneBookActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
