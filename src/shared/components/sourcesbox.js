import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Footer from './footer';
import { instances, headers } from '../../data/data';

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: '100%',
        margin: 0,
    },
    h2: {
        fontFamily: 'Indie Flower',
        fontWeight: 'normal',
        height: '50px',
        textAlign: 'center',
        margin: 0,
    },
};

export default class SourcesBox extends Component {
    state = { value: '' }

    handleChange = event => this.setState({ value: event.target.value })

    handleSubmit = (e) => {
        e.preventDefault();
        this.loadData();
    }

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
                <div className="source-box">
                    {
                        instances.map((e, index) => {
                            const link = `/${e.name}`;
                            const className = `source-instance-${index}`;
                            return (
                                <button
                                  type="button"
                                  className={className}
                                  key={e.id}
                                  onClick={() => this.loadData(link)}
                                >
                                    <h2>
                                        {headers[index]}
                                    </h2>
                                    <div className="bg-image-blur" />
                                    <img alt="" />
                                </button>
                                );
                        })
                    }
                </div>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                      value={value}
                      onChange={this.handleChange}
                      id="filled-search"
                      label="Or search for your very own topic!"
                      type="search"
                      style={styles.textField}
                      margin="normal"
                      variant="filled"
                    />
                </form>
                <Footer />
            </React.Fragment>
        );
    }
}
