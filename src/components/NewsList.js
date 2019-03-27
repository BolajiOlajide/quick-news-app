import React, { Component, Fragment } from 'react';
import axios from 'axios';

// components
import NewsCard from './NewsCard';

// config
import config from '../config';


class NewsList extends Component {
    state = {
        articles: [],
        isLoading: true
    }

    async componentDidMount() {
        const { API_KEY, BASE_URL } = config;
        const url = `${BASE_URL}?q=bitcoin&from=2019-02-27&sortBy=publishedAt&apiKey=${API_KEY}`;
        const { data } = await axios.get(url);
        let articles = [];
        if (data.status === "ok") {
            articles = [...data.articles, ...this.state.articles]
        }
        this.setState({
            isLoading: false,
            articles
        });
    }

    render() {
        const { articles, isLoading } = this.state;

        return (
            <Fragment>
                {
                    isLoading ? <p>Loading...</p> :( (articles.length < 1) ? <p>No Article Found</p> : articles.map((article, index) => {
                        return <NewsCard key={index} article={article} />;
                    }))
                }
            </Fragment>
        )
    }
}

export default NewsList;