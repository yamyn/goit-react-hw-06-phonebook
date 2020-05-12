import * as alertActions from '../alert/alertActions';

const validation = store => next => action => {
    if (action.meta && action.meta.addContact) {
        const { contacts } = store.getState();
        const { name } = action.payload.contact;
        const isUniqueName = contacts.some(
            savedContact =>
                savedContact.name.toLowerCase() === name.toLowerCase(),
        );
        if (!isUniqueName) return next(action);

        store.dispatch(alertActions.toShowAlert(`Contact already exist!`));

        setTimeout(() => {
            store.dispatch(alertActions.toHideAlert());
        }, 3000);
        return;
    }

    next(action);
};

export default validation;
