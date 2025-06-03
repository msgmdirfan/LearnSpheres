import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Mangodb() {
  const {id}=useParams();
    const token=localStorage.getItem("token");

  const[enroll,setEnroll]=useState([]);
  const fetchenroll=async()=>{
    try{
      const enrolls=await axios.get(`${API_BASE_URL}/enroll`);
      if(enrolls){
        setEnroll(enrolls.data);
      }
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{fetchenroll()},);

  let item=null;
   item=enroll.find((item)=>item.id===id);

  return (
    item ? (
      <div className="container-fluid my-5">
        <div className="row align-items-center bg-light p-4 rounded">
          <div className="col-12 col-md-7">
            <iframe
              width="100%"
              height="360"
              src={item.url.replace("youtu.be", "www.youtube.com/embed").replace("?si=", "?")}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`Video Tutorial: ${item.title}`}
              style={{ maxWidth: "100%", borderRadius: "8px" }}
              loading="lazy"
            >
              Your browser does not support iframes. Please use a modern browser to view this content.
            </iframe>
          </div>
          <div className="col-12 col-md-5">
            <h2 className="text-center text-md-start">{item.title}</h2>
            <p>{item.content}</p>
            <p>{item.foot}</p>
            <h5>Key Learning Outcomes:</h5>
            <div dangerouslySetInnerHTML={{ __html: item.list }} />
            {
              token?
              <Link to={`/detail/${item.id}`}>
              <button className="btn btn-outline-primary">Enroll Now</button>
            </Link>
              :
              <Link to={`/login`}>
              <button className="btn btn-outline-primary">Login To Enroll Now</button>
            </Link>
            }
            
          </div>
        </div>
      </div>
    ) : null
    
  );
}
