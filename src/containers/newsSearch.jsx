import React, { Component } from 'react'
import { fetchNews } from '../services/fetchNews';
import ArticleList from '../components/app/articles/articleList';
import Search from '../components/app/articles/search';

class NewsSearch extends React.Component {
    state = {search: '', loading: true, articles: []}
    
  async componentDidMount() {
    const articles = await fetchNews();
    this.setState({ articles, loading: false });
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    // fetch the latest search input/submit??? 
    // <<<
  };

    render() { 
        const { loading, search, articles } = this.state;

        if (loading) { return <h1>LOADING!!!...</h1>; }
        else {
            return (
                <>
                <Search search={search} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                <ArticleList articles={articles} />
                </>
            );
        }
    }
}
 
export default NewsSearch;