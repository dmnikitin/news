import React, { Component } from 'react';
import Footer from './footer';
import styles from '../custom-styles/sourceboxStyles';
import SourcesForm from './sourcesForm';
import SourcesBox from './sourcesBox';

export default class SourcesWrapper extends Component {
    state = { value: '' }

    handleChange = event => this.setState({ value: event.target.value })

    handleSubmit = (e) => {
        e.preventDefault();
        this.loadData();
    }

    // eslint-disable-next-line react/destructuring-assignment
    loadData = (url = `/${this.state.value}`) => {
        if (typeof window !== 'undefined') {
            window.location.href = url;
        }
    }

    render() {
        const { value } = this.state;
        return (
            <React.Fragment>
                <h2 style={styles.h2}> Get the latest articles by selected topics! </h2>
                <SourcesBox loadData={this.loadData} />
                <SourcesForm value={value} submit={this.handleSubmit} change={this.handleChange} />
                <Footer />
            </React.Fragment>
        );
    }
}
