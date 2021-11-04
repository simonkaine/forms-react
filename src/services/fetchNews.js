export const fetchNews = async () => {
    const res = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2c079beddab3498aaf5b218f607775f5');
    const newsArticles = await res.json();
    console.log('News Articles', newsArticles);
    return newsArticles.articles;
  };
  