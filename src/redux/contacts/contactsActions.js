import { Type } from './contactsTypes';

export const addContact = contact => ({
    type: Type.ADDCONTACT,
    payload: { contact },
});

export const deleteContact = id => ({
    type: Type.DELETECONTACT,
    payload: { id },
});
