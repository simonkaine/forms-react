import React from 'react'
import { fetchNews, fetchNewsArticle } from '../services/fetchNews.js';
import ArticleList from '../components/articles/articleList.jsx';
import Search from '../components/articles/Search.jsx';

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
    const articles = await fetchNewsArticle(this.state.search);
    this.setState({ articles, loading: false });
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