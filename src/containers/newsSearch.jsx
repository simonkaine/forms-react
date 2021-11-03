import React, { Component } from 'react'
import { fetchNews } from '../services/fetchNews';

class NewsSearch extends React.Component {
    state = {search: '', loading: true, articles: []}
    
  async componentDidMount() {
    const articles = await fetchNews();
    this.setState({ articles, loading: false });
  }

    render() { 
        const { loading, search, articles } = this.state;
        if (loading) return <h1>LOADING!...!!!....!!!!!!...!!!!!!</h1>
        return (
            <>
            
            </>
        );
    }
}
 
export default NewsSearch;