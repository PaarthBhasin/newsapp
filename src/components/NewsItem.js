import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{left:'90%', zIndex:'1'}}>{source}</span>
          <img src={!imageUrl?"https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_the_Importance_of_Technology.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:'Unknown'} on <br/>{new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="blank" className="btn bt-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
