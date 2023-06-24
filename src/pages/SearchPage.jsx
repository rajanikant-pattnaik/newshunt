import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { fetchData } from '../utils/fetchData';
import NewsCard from '../components/NewsCard';

const SearchPage = () => {
  const {term}=useParams();
  const [data, setdata] = useState('');
  useEffect(() => {
    const getData= async()=>{
      const currdata=await fetchData(term);
      setdata(currdata);
     }
    getData();
  }, [term])
  return (
    <>
     <Navbar/>
     <div>
     {
        data?.length===0?(
            <div className="">
            <h1>No data</h1>
            </div>
        ):(
            <div className="flex flex-wrap justify-center">
             {
                data.map((d)=>(
                    <NewsCard news={d}/>
                ))
             }
            </div>
        )
     }
    </div>
    </>
  )
}

export default SearchPage