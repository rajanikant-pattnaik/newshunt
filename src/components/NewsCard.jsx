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
    <div className="bg-white rounded-lg overflow-hidden shadow-lg sm:w-80 m-6">
    <img
      src={urlToImage === null ? noimage : urlToImage}
      className="w-full h-48 object-cover object-center"
      alt="news"
    />
    <div className="p-4">
      <p className="text-gray-500 text-sm">{publishedAt}</p>
      <p className="text-lg font-semibold text-black mb-2">{title?.slice(0, 35)}</p>
      <p className="text-gray-600 text-sm mb-4">{description?.slice(0, 35)}</p>
      <p className="text-gray-800 text-base mb-4">{content?.slice(0, 35)}</p>
      <p className="text-blue-500 text-sm font-semibold cursor-pointer">
        <Link
          href={url}
          target="_blank"
          rel="noopener"
          onClick={handleHistory}
        >
          Read more
        </Link>
      </p>
    </div>
  </div>
  
  );
};

export default NewsCard;
