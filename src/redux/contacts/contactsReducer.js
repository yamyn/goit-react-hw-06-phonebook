// import { combineReducers } from 'redux';
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
    deleteContact,
    loadContacts,
    changeFilter,
    addContact,
} from './contactsActions';

// import Type from './contactsTypes';
import * as ls from '../../helpers/saveLocalStorage';
// import {
//     toGetContacts,
//     toAddContacts,
//     toDeleteContacts,
// } from '../../helpers/saveLocalStorage';

// const contactsReducer = (state = [], action) => {
//     switch (action.type) {
//         case Type.LOADCONTACTS:
//             return toGetContacts();

//         case Type.ADDCONTACT:
//             return toAddContacts(state, action.payload.contact);

//         case Type.DELETECONTACT:
//             return toDeleteContacts(state, action.payload.id);
//         default:
//             return state;
//     }
// };

const contactsReducer = createReducer([], {
    [loadContacts]: () => ls.toGetContacts(),
    [addContact]: (state, action) =>
        ls.toAddContacts(state, action.payload.contact),
    [deleteContact]: (state, action) =>
        ls.toDeleteContacts(state, action.payload.id),
});

// const filterReducer = (state = '', action) => {
//     switch (action.type) {
//         case Type.CHANGEFILTER:
//             return action.payload.filter;
//         default:
//             return state;
//     }
// };

const filterReducer = createReducer('', {
    [changeFilter]: (state, action) => action.payload.filter,
    [deleteContact]: () => '',
});

const contactsListReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});

export default contactsListReducer;
