import React, {useEffect,useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
// import LoadingBar from 'react-top-loading-bar'


const News = (props) => {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
    

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setloading({ loading: true })
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json();
        console.log(parsedData);
        props.setProgress(70);
        setarticles(parsedData.articles);
        settotalResults(parsedData.totalResults)
        setloading(false)
        props.setProgress(100);


    }
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)}-MyNewsMonk.com`; 
        updateNews();
    }, [])

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setpage(page + 1 )
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
    };

        return (
            <>
                <strong><h1 className="text-center" style={{ margin: "50px",marginTop:"100px" }}>MyNewsMonk.com - {capitalizeFirstLetter(props.category)} Category Headlines </h1></strong>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}>
                    <div className="container">
                        <div className="row">
                            {articles.map((element) => {
                                return <div className="col-md-4 my-3" key={element.url}>
                                    <Newsitem title={element.title} description={element.description ? element.description.slice(0, 75) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>

                            })}

                        </div>
                    </div>
                </InfiniteScroll>

            </>
        )
    
}
News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
    author: "Unknown",
    date: ""
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    dataLength: PropTypes.number,
}

export default News
