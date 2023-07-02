import React from "react";
import { Link } from "react-router-dom";
import { deleteHistory } from "../utils/historyCrud";
// import { useNavigate } from "react-router-dom";

const HistoryCard = ({
  news: { author, title, description, content, urlToImage, url, publishedAt,hid },
}) => {
    console.log(hid);
    // const navigate=useNavigate();
    const deleteHistoryCard=async()=>{
        try {
            await deleteHistory(hid);
            window.location.reload(false);
        } catch (error) {
            console.log(error)
        }
    
    }
  return (
    <div className="h-128 w-80 m-6 border-2 border-black ">
      <img src={urlToImage} alt="news" />
      <p>{author}</p>
      <p>{title?.slice(0, 35)}</p>
      <p>{description?.slice(0, 35)}</p>
      <p>{content?.slice(0, 35)}</p>
      <p>{publishedAt}</p>
      <Link to={url} target="_blank" rel="noopener">
        read more
      </Link>
      <button className="block border-4 h-8 w-16 rounded-3xl bg-black text-white hover:bg-slate-600 hover:border-blue-950 " onClick={deleteHistoryCard}>
        delete
      </button>
    </div>
  );
};

export default HistoryCard;
