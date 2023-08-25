import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    console.log("Hi! I am constructor.")
    this.state = {
      articles:[],
      loading:false
    }
  }
  async componentDidMount(){
    console.log("cdm")
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9083c3ed45cc4d2592eb9e51a4ef77dd";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
          })}
        </div>
      </div>
    )
  }
}

export default News
