import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticlesList from './articlesList';
import unmountHOC from './unmountHOC';

const pathname = (typeof window !== 'undefined') ? window.location.pathname.replace('/', '') : null;

class NewsBox extends Component {
    state = {
        page: 1,
        isLoading: false,
        articles: [],
    }

    static propTypes = {
        value: PropTypes.string,
    }

    onScroll = () => {
        const element = document.documentElement;
        const scrollTop = (element && element.scrollTop) || document.body.scrollTop;
        const scrollHeight = (element && element.scrollHeight) || document.body.scrollHeight;
        const clientHeight = element.clientHeight || window.innerHeight;
        const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
        if (scrolledToBottom) this.loadData();
    }

    loadData = () => {
        const { value } = this.props;
        const { page, articles } = this.state;
        this.setState({ isLoading: true });
        setTimeout(() => {
            const myInit = {
                method: 'POST',
                body: `value=${value}&page=${page}`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-Requested-With': 'XMLHttpRequest',
                },
            };

            fetch(`/${value || pathname}`, myInit)
                .then((response) => {
                    if (response.ok) {
                        return response.clone().json();
                    }
                    throw new Error('failed');
                }, networkError => console.log(networkError.message))
                .then(jsonResponse => this.setState({
                    articles: [...new Set([
                        ...articles,
                        ...jsonResponse.articles.filter(e => e.urlToImage),
                    ])],
                    page: page + 1,
                    isLoading: false,
                }))
                .catch(e => console.log(e.message));
        }, 1000);
    }

    componentDidMount = () => {
        this.loadData();
        window.addEventListener('scroll', this.onScroll, false);
        this.setState({ scrolled: true });
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    render() {
        let banner;
        let heading;
        const { value } = this.props;
        const { articles, isLoading } = this.state;
        switch (value || pathname) {
            case 'top':
                banner = 'source-banner-0';
                heading = 'Top news';
                break;
            case 'belarus-minsk':
                banner = 'source-banner-1';
                heading = 'Belarus news';
                break;
            case 'sports-nhl-nba-soccer':
                banner = 'source-banner-2';
                heading = 'Sports news';
                break;
            case 'entertainment-trends':
                banner = 'source-banner-3';
                heading = 'Top trends';
                break;
            case 'technology-science':
                banner = 'source-banner-4';
                heading = 'Tech news';
                break;
            default:
                banner = 'source-banner-0';
                heading = `selected: ${pathname || value}`;
        }

        return (
            <div className="newsbox">
                <div className={banner}>
                    <img alt="" />
                    <h1>
                        {heading}
                    </h1>
                </div>
                <ArticlesList list={articles} />
                {
                    isLoading && (
                        <div className="data-loading">
                            <i className="fa fa-refresh fa-spin" />
                        </div>
                    )
                }
            </div>
        );
    }
}
export default unmountHOC(NewsBox);
