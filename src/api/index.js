import axios from "axios"
const BASEURL = "http://localhost:3001/cards";


export const fetchCards =async ()=>{

const {data}=await axios.get(BASEURL);
return data;

}


 export const  likeCard=async(id,is_liked)=>{
  const url= `${BASEURL}/${id}`
  const {data}=await axios.patch(url,{is_liked:is_liked});
return data;

}

