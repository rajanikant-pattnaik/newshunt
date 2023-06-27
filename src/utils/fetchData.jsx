import axios from "axios";


 export const fetchData=async(item)=>{
   let url=`https://newsapi.org/v2/everything?q=${item}&apiKey=${process.env.REACT_APP_API_KEY}`;
    console.log(url);
    let req= await axios.get(url)
    const data=req.data;
    return data.articles;
 }