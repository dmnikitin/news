import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticlesList from "./articlesList.js";
const pathname = window.location.pathname.replace("/", "")

export default class NewsBox extends Component {

    state = {
        page: 1,
        isLoading: false,
        articles: []
    }

    onScroll = () => {

        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight;
        const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
        // vanilla js element (html_el.scrollTop + html_el.clientHeight >= html_el.scrollHeight)
        if (scrolledToBottom) {
            this.loadData();
        }
    }

    loadData = () => {

        this.setState({ isLoading: true });
        let link = this.props.value ? this.props.value : pathname;
        setTimeout(() => {

            const myInit = {
                method: "POST",
                body: `value=${this.props.value}&page=${this.state.page}`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-Requested-With': 'XMLHttpRequest'
                }
            };

            fetch(`${link}`, myInit)
                .then(response => {
                    if (response.ok) {
                        return response.clone().json();
                    }
                    throw new Error('failed')
                }, networkError => console.log(networkError.message))
                .then(jsonResponse =>
                    this.setState({ articles: [...this.state.articles, ...jsonResponse.articles.filter(e => e.urlToImage)], page: this.state.page + 1, isLoading: false }))
        }, 1000)
    }

    componentDidMount = () => {
        this.loadData();
        window.addEventListener('scroll', this.onScroll, false)
    }

    componentWillUnmount = () => window.removeEventListener('scroll', this.onScroll, false);

    render() {

        let banner, heading;
        switch (this.props.value || pathname) {
            case "top":
                banner = "source-banner-0";
                heading = "Top news";
                break;
            case "belarus-minsk":
                banner = "source-banner-1";
                heading = "Belarus news";
                break;
            case "sports-nhl-nba-soccer":
                banner = "source-banner-2";
                heading = "Sports news";
                break;
            case "entertainment-trends":
                banner = "source-banner-3";
                heading = "Top trends";
                break;
            case "technology-science":
                banner = "source-banner-4";
                heading = "Tech news";
                break;
            default:
                banner = "source-banner-0";
                heading = `selected: ${pathname || this.props.value}`
        }

        return (
            <div className="newsbox">
                <div className={banner}><img alt=""/></div>
                <h1>{heading}</h1>
                <ArticlesList list={this.state.articles} />
                {
                    this.state.isLoading &&
                    <div className="data-loading">
                        <i className="fa fa-refresh fa-spin"></i>
                    </div>
                }
            </div>
        );
    }
}
