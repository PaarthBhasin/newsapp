
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country : 'in',
    pageSize: 8,
    category:'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props){
    super(props);
    console.log("Hi! I am constructor.")
    this.state = {
      articles:[],
      loading:false,
      page:1,
      // totalResults:0
    }
    document.title= `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }

  async componentDidMount(){
    console.log("cdm")
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/20))){  
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9083c3ed45cc4d2592eb9e51a4ef77dd&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState(
      {articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
      }
    )
    }
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9083c3ed45cc4d2592eb9e51a4ef77dd&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        loading:false,
        totalResults: parsedData.totalResults
      })
  }

    handleNextClick = async() =>{
      console.log("Next")
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9083c3ed45cc4d2592eb9e51a4ef77dd&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    //   this.setState({
    //     page:this.state.page+1,
    //     articles:parsedData.articles,
    //     loading:false
    //   })
    this.setState({page:this.state.page+1});
    this.updateNews();

  }

   handlePrevClick = async() => {
    console.log("Prev");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9083c3ed45cc4d2592eb9e51a4ef77dd&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    //   this.setState({
    //     page:this.state.page-1,
    //     articles:parsedData.articles,
    //     loading:false
    //   })
    this.setState({page:this.state.page-1})
    this.updateNews();
  }

  fetchMoreData = async() => {
   this.setState({page:this.state.page+1})
   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9083c3ed45cc4d2592eb9e51a4ef77dd&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        loading:false,
        totalResults: parsedData.totalResults
      })
  };

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin:'35px 0px'}}><span className="text-primary">NewsMonkey -Top Headlines - {this.capitalizeFirstLetter(this.props.category)}</span></h1>
        {/* {this.state.loading&&<Spinner/>} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
          {this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark mx-1" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark mx-1" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>

    )
  }
}

export default News
