import React, { useEffect, useState } from 'react'
import Newsitems from './Newsitems'

function Newsboard(props) {
  const [articles,setArticles]=useState([]);
  useEffect(()=>{
    let url= `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=38c25052cc2744e0a8a3e544ec68e4d2`
    fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
  },[props.category])
  return (
    <>
      <div className="container">
        <h1 className="text-center my-2">Latest <span className="badge bg-danger">News </span></h1>
         { articles?.map((news,index)=>{
               return <Newsitems key={index} title={news.title} description={news.description} url={news.url} imageUrl={news.urlToImage}/>
          })
        }
      </div>
    </>
  )
}

export default Newsboard
