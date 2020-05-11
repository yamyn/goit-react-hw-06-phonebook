import React, { Component } from 'react';
import shortid from 'shortid';
import { CSSTransition } from 'react-transition-group';

import styles from './App.module.css';
import slideTittleTransition from '../../transitions/slide-500ms.module.css';
import slideTransition from '../../transitions//slide.module.css';

import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import ContactsList from '../ContactsList/ContatctsListContainer';
import Filter from '../Filter/FilterContainer';
import CreateContactForm from '../CreateContactForm/CreateContactFormContainer';
import Alert from '../Alert/Alert';

export default class App extends Component {
    state = {
        addTittle: false,
        alert: {
            isShow: false,
            message: '',
        },
    };

    componentDidMount() {
        // const savedContacts = localStorage.getItem('contacts');
        this.setState({
            addTittle: true,
        });
        // if (savedContacts) {
        //     this.setState({ contacts: JSON.parse(savedContacts) });
        // }
        // return;
    }

    componentDidUpdate(prevProps, prevState) {
        // if (prevState.alert.isShow) {
        //     this.setState({
        //         alert: { isShow: false, message: '' },
        //     });
        // }
        // if (prevState.contacts !== this.state.contacts) {
        //     localStorage.setItem(
        //         'contacts',
        //         JSON.stringify(this.state.contacts),
        //     );
        // }
    }

    // changeFilter = event => {
    //     this.setState({ filter: event.target.value });
    // };

    // addContact = contact => {
    //     const isUniqueName = this.state.contacts.some(
    //         savedContact =>
    //             savedContact.name.toLowerCase() === contact.name.toLowerCase(),
    //     );

    //     if (isUniqueName) {
    //         this.setState({
    //             alert: {
    //                 isShow: true,
    //                 message: `Contact ${contact.name} already exist!`,
    //             },
    //         });
    //         return;
    //     }
    //     const contactToAdd = {
    //         ...contact,
    //         id: shortid.generate(),
    //     };
    //     this.setState(state => ({
    //         contacts: [...state.contacts, contactToAdd],
    //     }));
    // };

    // deleteContact = id => {
    //     this.setState(state => ({
    //         contacts: state.contacts.filter(contact => contact.id !== id),
    //     }));
    // };

    render() {
        const { addTittle, alert } = this.state;

        return (
            <div className={styles.container}>
                <CSSTransition
                    in={addTittle}
                    timeout={500}
                    classNames={slideTittleTransition}
                    unmountOnExit
                >
                    <h1>Phonebook</h1>
                </CSSTransition>

                <Section title="">
                    <CreateContactForm />
                </Section>

                <Section title="">
                    <Filter />
                </Section>

                <Section title="">
                    <ContactsList />
                </Section>

                <CSSTransition
                    in={alert.isShow}
                    timeout={300}
                    classNames={slideTransition}
                    unmountOnExit
                >
                    <Alert message={alert.message} />
                </CSSTransition>
            </div>
        );
    }
}
