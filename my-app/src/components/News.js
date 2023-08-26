
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export class News extends Component {
  constructor(){
    super();
    console.log("Hi! I am constructor.")
    this.state = {
      articles:[],
      loading:false,
      page:1
    }
  }
  async componentDidMount(){
    console.log("cdm")
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/20))){  
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9083c3ed45cc4d2592eb9e51a4ef77dd&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
    })
    }
  }
    handleNextClick = async() =>{
      console.log("Next")
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9083c3ed45cc4d2592eb9e51a4ef77dd&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
      this.setState({
        page:this.state.page+1,
        articles:parsedData.articles,
        loading:false
      })
  }

   handlePrevClick = async() => {
    console.log("Prev");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9083c3ed45cc4d2592eb9e51a4ef77dd&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
      this.setState({
        page:this.state.page-1,
        articles:parsedData.articles,
        loading:false
      })
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
        {this.state.loading&&<Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark mx-1" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark mx-1" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>

    )
  }
}

export default News
