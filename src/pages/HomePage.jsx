import React, { useEffect, useState} from 'react'
import { fetchData } from '../utils/fetchData';
import Navbar from '../components/Navbar';
import NewsCard from '../components/NewsCard';

const HomePage = () => {
    const [data, setdata] = useState('');
    useEffect(() => {
        const getData= async()=>{
         const currdata=await fetchData('latest');
         setdata(currdata);
        }
       getData();
    }, [])
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

export default HomePage