import * as alertActions from '../alert/alertActions';
import Validation, { META } from '../../helpers/Validation';

const validation = store => next => action => {
    if (action.meta && action.meta.addContact) {
        const { contacts } = store.getState();
        const { contact } = action.payload;
        const validateRes = Validation.validate(contacts, contact);

        if (validateRes.meta === META.success) {
            action.payload.contact = validateRes.contact;
            next(action);
        }
        const alertMessage = validateRes.message ? validateRes.message : '';

        store.dispatch(alertActions.toShowAlert(alertMessage));

        setTimeout(() => {
            store.dispatch(alertActions.toHideAlert());
        }, 3000);
        return;
    }

    next(action);
};

export default validation;
