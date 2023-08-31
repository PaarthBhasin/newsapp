import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card" >
        <div style={
          {
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }
        }>
          <span className='badge rounded-pill bg-danger'>{source}</span>
        </div>
        <img src={!imageUrl ? "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_the_Importance_of_Technology.jpg" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author ? author : 'Unknown'} on <br />{new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="blank" className="btn bt-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
