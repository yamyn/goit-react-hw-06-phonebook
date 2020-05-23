import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contactsActions';
import CreateContactForm from './CreateContactForm';
import toAddId from '../../helpers/toAddId';

const mapDispatchToProps = dispatch => ({
    onAddContact: contact => dispatch(contactsActions.addContact(contact)),
});

export default connect(null, mapDispatchToProps)(CreateContactForm);
