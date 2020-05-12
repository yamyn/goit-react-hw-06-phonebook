import { Type } from './alertTypes';

const contactsReducer = (state = '', action) => {
    switch (action.type) {
        case Type.SHOWALERT:
            return action.payload.message;

        case Type.HIDEALERT:
            return '';

        default:
            return state;
    }
};

export default contactsReducer;
