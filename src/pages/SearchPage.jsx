import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchData";
import NewsCard from "../components/NewsCard";

const SearchPage = () => {
  const [loading, setLoading] = useState(false);
  const { term } = useParams();
  const [data, setdata] = useState("");
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setdata([]);
      const currdata = await fetchData(term);
      setdata(currdata);
      setLoading(false);
    };
    getData();
  }, [term]);
  return (
    <>
      <Navbar />
      <div>
        {data?.length === 0 ? (
          <div className="h-semi-screen flex justify-center items-center text-white text-4xl bg-gray-700">
            <h1>{loading === true ? "loading" : "No Data"}</h1>
          </div>
        ) : (
          <div className="bg-gray-700">
            <h1 className="text-center text-4xl text-white">
              Latest news on {term}...
            </h1>
            <div className="flex flex-wrap justify-center ">
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

export default SearchPage;
