import { Type } from './contactsTypes';

export const loadContacts = () => ({
    type: Type.LOADCONTACTS,
    payload: {},
});

export const addContact = contact => ({
    type: Type.ADDCONTACT,
    payload: { contact },
    meta: {
        addContact: true,
    },
});

export const deleteContact = id => ({
    type: Type.DELETECONTACT,
    payload: { id },
});
