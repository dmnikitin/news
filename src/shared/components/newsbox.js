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

    static defaultProps = {
        value: String,
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

    loadData = async () => {
        const { value } = this.props;
        const { page, articles } = this.state;
        const myInit = {
          method: 'POST',
          body: `value=${value}&page=${page}`,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Requested-With': 'XMLHttpRequest',
          },
        };
        this.setState({ isLoading: true });
        try {
            const result = await fetch(`/${value || pathname}`, myInit);
            const data = await result.clone().json();
            this.setState({
              articles: [...new Set([
                ...articles,
                ...data.articles
                  .filter(e => e.urlToImage)
                  .filter(e => e.title.length > 40 && e.description.length > 80),
              ])],
              page: page + 1,
              isLoading: false,
            });
        } catch (err) {
            console.log(err.message);
        }
    }

    componentDidMount = () => {
        this.loadData();
        window.addEventListener('scroll', this.onScroll, false);
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
