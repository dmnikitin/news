import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import Footer from './footer.js';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

//путаница с with styles i withrouter

const instances = ["top", "belarus-minsk", "sports-nhl-nba-soccer", "entertainment-trends", "technology-science"]
const headers = ["top news.", "belarus.", "sports.", "trends.", "tech."]
const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: "100%",
        margin: 0,
    },
    h2: {
        fontFamily: '"Indie Flower", cursive',
        fontWeight: "normal",
        height: "50px",
        textAlign: "center",
        margin: 0,
    }
};

class SourcesBox extends Component {


    state = { value: "" }

    handleChange = (event) => this.setState({ value: event.target.value })

    handleSubmit = (e) => {
        e.preventDefault();
        this.setTopic(this.state.value)
        this.props.history.push(`/${this.state.value}`);
    }

    setTopic = (value) => this.props.setTopic(value)

    render() {
        // const { classes } = this.props;

        return (
            <React.Fragment >
            <h2 style={styles.h2}> Get the articles by selected topics! </h2>
                <div className="source-box" >
                    {
                        instances.map ( (e, index) => {
                            let link = `/${e}`;
                            let className = `source-instance-${index}`
                            return  <div className={className} key={index}>
                                        <h2> {headers[index]}</h2>
                                        <div className="bg-image-blur"></div>
                                        <Link onClick={()=> this.setTopic(e)} to={link}> <img alt=""/></Link>
                                    </div>
                        })
                    }
                </div>
                <form action="" onSubmit={this.handleSubmit}>

                      <TextField
                          value={this.state.value} onChange={this.handleChange}
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

export default withRouter(SourcesBox)