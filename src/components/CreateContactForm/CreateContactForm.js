import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { form, button, wrap } from './CreateContactForm.module.css';

export default class TaskEditor extends Component {
    static propTypes = {
        onAddContact: PropTypes.func.isRequired,
    };

    state = {
        name: '',
        number: '',
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.onAddContact({ ...this.state });

        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        const { name, number } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={form}>
                <div className={wrap}>
                    <p>Name</p>
                    <input
                        type="text"
                        placeholder="Enter contact`s name"
                        value={name}
                        onChange={this.handleChange}
                        name="name"
                    />
                </div>
                <div className={wrap}>
                    <p>Number</p>
                    <input
                        type="text"
                        placeholder="Enter contact`s name"
                        value={number}
                        onChange={this.handleChange}
                        name="number"
                    />
                </div>
                <button className={button} type="submit">
                    Add contact
                </button>
            </form>
        );
    }
}
