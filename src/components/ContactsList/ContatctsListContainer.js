import { connect } from 'react-redux';

import * as contactsActions from '../../redux/contacts/contactsActions';
import toFilterContacts from '../../helpers/toFilterContacts';
import ContactsList from './ContactsList';

const mapStateToProps = state => ({
    contacts: toFilterContacts(state.contacts, state.filter),
});

const mapDispatchToProps = dispatch => ({
    onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
    onLoadContacts: () => dispatch(contactsActions.loadContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
