import React, { Component } from 'react';
import { render } from 'react-dom';
import './sass/styles.scss';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsBox from './components/newsbox.js';
import SourcesBox from './components/sourcesbox.js';


class App extends Component {

    state = { selected: "" }

    setTopic = (value) => this.setState({ selected: value })

    render() {

        let path = `/${this.state.selected}`
        return (
            <Router>
		    	<div className="main">
					<Switch >
			          <Route exact path="/" render={() => <SourcesBox value={this.state.selected} setTopic={this.setTopic}/> } />
			          <Route path={path} render={() => <NewsBox value={this.state.selected} setTopic={this.setTopic}/>} />
			        </Switch>
				</div>
			</Router>
        );
    }
}


render(<App />, document.getElementById('root'));


     

