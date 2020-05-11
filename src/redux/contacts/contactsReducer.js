import { Type } from './contactsTypes';

const contactsReducer = (state = [], action) => {
    switch (action.type) {
        case Type.ADDCONTACT:
            return [...state, action.payload.contact];
        case Type.DELETECONTACT:
            return state.filter(contact => contact.id === action.payload.id);
        default:
            return state;
    }
};

export default contactsReducer;
