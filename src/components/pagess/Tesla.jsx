import { useEffect, useState } from "react";

function Apple() {
    const [news, setNews] = useState([]);

    // Fetching news function
    async function getNews() {
        const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2025-01-11&sortBy=publishedAt&apiKey=4f28e269ba79402abf13cf1c3e1b8c23");
        const body = await response.json();
        setNews(body.articles.slice(0, 10)); 
    }

    useEffect(() => {
        getNews(); 
    }, []);

    return (
        <>
            <h1 className="text-center text-white bg-secondary py-3">Tesla News</h1>
            <div className="container">
                {news.map((article, index) => (
                    <div className="card mb-4" key={index}>
                        <img src={article.urlToImage}className="card-img-top"alt={article.title}/>
                        <div className="card-body">
                            <h5 className="card-title">{article.title}</h5>
                            <p className="card-text">{article.description}</p>
                            <a href={article.url} className="btn btn-primary" target="_blank">
                                Read more
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Apple;
