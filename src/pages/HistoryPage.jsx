import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getALLHistory } from "../utils/historyCrud";
import HistoryCard from "../components/HistoryCard";

const HistoryPage = () => {
  const uid = localStorage.getItem("userId");
  // console.log(uid)
  const [result, setresult] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      if (uid === null) return;
      try {
        const array = [];
        const res = await getALLHistory(uid);
        // console.log(res);
        res.forEach((doc) => {
          array.push({ ...doc.data(), hid: doc.id });
        });
        setresult(array);
      } catch (error) {
        console.log(error);
      }
    };
    getHistory();
  }, [uid]);
  // console.log(result);
  return (
    <>
      {uid !== null ? (
        <div>
          <Navbar />
          {result?.length === 0 ? (
            <div className="bg-gray-700 w-full h-semi-screen flex justify-center items-center text-white text-4xl">
              <h1>No data</h1>
            </div>
          ) : (
            <div className="">
              <div className="flex flex-wrap justify-center">
                {result.map((d) => (
                  <HistoryCard news={d} />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="bg-gray-700 w-full h-semi-screen flex justify-center items-center text-white text-4xl">
            No user is there;
          </div>
        </div>
      )}
    </>
  );
};

export default HistoryPage;
