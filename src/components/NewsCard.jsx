import React from "react";
import { Link } from "react-router-dom";
import { addHistory } from "../utils/historyCrud";
import noimage from "../assets/noimage.webp"

const NewsCard = ({
  news: { author, title, description, content, urlToImage, url, publishedAt },
}) => {
  const id =localStorage.getItem('userId');
  const handleHistory=async()=>{
    
    if(id===null){
      alert('login first')
      return
    }
    const history={id,author,title,description,content,urlToImage,url,publishedAt};
    try {
      // console.log(history);
      await addHistory(history);
      // console.log("success");
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(urlToImage);
  return (
    <div className="h-128 w-80 m-6 border-2 border-black ">
      <img src={urlToImage===null?noimage:urlToImage} className="w-full h-2/5" alt="news" />
      <p>{author}</p>
      <p>{title?.slice(0,35)}</p>
      <p>{description?.slice(0,35)}</p>
      <p>{content?.slice(0, 35)}</p>
      <p>{publishedAt}</p>
      <Link
        to={url}
        target="_blank"
        rel="noopener"
        onClick={handleHistory}
      >
        read more
      </Link>
    </div>
  );
};

export default NewsCard;
