import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import Navbar from "../components/Navbar";
import NewsCard from "../components/NewsCard";
import { categories } from "../utils/constant";

const HomePage = () => {
  const [data, setdata] = useState([]);
  const [article, setarticle] = useState("general");
  useEffect(() => {
    const getData = async () => {
      const currdata = await fetchData(article);
      setdata(currdata);
    };
    getData();
  }, [article]);
  return (
    <>
      <Navbar />
      <div className=" bg-gray-700 w-full h-full">
        {data?.length === 0 ? (
          <div className="h-semi-screen flex justify-center items-center text-white text-4xl ">
            <h1>No data</h1>
          </div>
        ) : (
          <div className=" bg-gray-700 w-full h-full">
            <div className="flex h-12 justify-center items-center pt-4 pb-4">
              {categories.map((category) => (
                <span
                  className={`mx-8 text-2xl border-2 border-blue-900 ${
                    article === category.name
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  } w-auto px-3  rounded-xl cursor-pointer`}
                  onClick={() => {
                    setarticle(category.name);
                  }}
                >
                  {category.name}
                </span>
              ))}
            </div>
            <h1 className="text-center text-4xl text-white">
              Latest news of {article}...
            </h1>
            <div className="flex flex-wrap justify-center bg-gray-700">
              {data.map((d) => (
                <NewsCard news={d} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
