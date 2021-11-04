export const fetchNews = async () => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.NEWS_KEY}`);
    const newsArticles = await res.json();
    console.log('News Articles', newsArticles);
    return newsArticles.articles;
  };
  
// Add another fetch function here for single article pull?
// ..need this for handleSubmit?