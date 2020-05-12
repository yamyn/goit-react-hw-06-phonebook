import { Type } from './contactsTypes';
import {
    toGetContacts,
    toAddContacts,
    toDeleteContacts,
} from '../../helpers/saveLocalStorage';

const contactsReducer = (state = [], action) => {
    switch (action.type) {
        case Type.LOADCONTACTS:
            return toGetContacts();

        case Type.ADDCONTACT:
            return toAddContacts(state, action.payload.contact);

        case Type.DELETECONTACT:
            return toDeleteContacts(state, action.payload.id);
        default:
            return state;
    }
};

export default contactsReducer;
