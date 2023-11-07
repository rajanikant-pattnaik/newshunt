import React from "react";
import { Link } from "react-router-dom";
import { deleteHistory } from "../utils/historyCrud";
import noimage from "../assets/noimage.webp"
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
    <div className="max-w-md mx-auto border border-black bg-white rounded-lg shadow-lg mb-6">
    <img
      src={urlToImage === null ? noimage : urlToImage}
      className="w-full h-40 object-cover rounded-t-lg"
      alt="news"
    />
    <div className="p-4">
      <p className="text-gray-500 text-sm">{publishedAt}</p>
      <p className="text-lg font-semibold text-black mb-2">{title?.slice(0, 35)}</p>
      <p className="text-gray-600 text-sm mb-4">{description?.slice(0, 35)}</p>
      <p className="text-gray-800 text-base mb-4">{content?.slice(0, 35)}</p>
      <div className="flex justify-between items-center">
        <p className="text-blue-500 text-sm font-semibold cursor-pointer">
          <Link
            href={url}
            target="_blank"
            rel="noopener"
          >
            Read more
          </Link>
        </p>
        <button
          className="block h-8 w-16 rounded-3xl bg-red-500 text-white hover:bg-red-600"
          onClick={deleteHistoryCard}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default HistoryCard;
