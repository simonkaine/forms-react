export const fetchNews = async () => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.NEWS_KEY}`);
    const newsArticles = await res.json();
    console.log('News Articles', newsArticles);
    return newsArticles.articles;
  };
  
// Add another fetch function here for single article pull using search field data?
// ..need this for handleSubmit?

export const fetchNewsArticle = async (search) => {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&q=${search}&apiKey=${process.env.NEWS_KEY}`)
  const newsArticle = await res.json();
  return newsArticle.articles;
};