import React from 'react'

const NewsCard = ({news:{author,title,description,content,urlToImage,url,publishedAt}}) => {
  return (
    <div className="h-128 w-80 m-6 border-2 border-black ">
     <img src={urlToImage} alt="news" />
     <p>{author}</p>
     <p>{title?.slice(0,20)}</p>
     <p>{description?.slice(0,20)}</p>
     <p>{content?.slice(0,20)}</p>
     <p>{publishedAt}</p>
    </div>
  )
}

export default NewsCard