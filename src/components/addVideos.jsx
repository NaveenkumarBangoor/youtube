import { useRef } from "react";
import '../styles/addVideos.css'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AddVideos = () => {

    let thumbnail=useRef(null)
    let title=useRef(null)
    let channel=useRef(null)
    let views=useRef(null)
    let navigate=useNavigate()
    let upload=(e)=>{
        e.preventDefault() //prevents page from re-loading
       let data={
        thumbnail:thumbnail.current.value,
        title:title.current.value,
        channel:channel.current.value,
        views:views.current.value
       }
      fetch(' http://localhost:4000/videos',{
        method:'post',
        headers:{'Content-Type':'Application/json'},
        body:JSON.stringify(data)
      })
      alert("video uploaded succefully")
       navigate('/') //navigate to different routes
    }

    return ( 
        <div className="addVideo">
            <div className="addShort">
               <h4><Link to="/addShort" style={{color:"black",textDecoration:"none"}}>addShort</Link></h4>
            </div>
        <h1>Enter Video Detailes</h1>
        <form onSubmit={upload}>
            <input ref={thumbnail} type="url" placeholder="enter thumbnail" required='true' />
            <input ref={title} type="text" placeholder="enter title" required='true'/>
            <input ref={channel} type="text" placeholder="enter channel" required='true'/>
            <input ref={views} type="text" placeholder="enter views" required='true'/>
           <button style={{cursor:"pointer"}}>upload video</button>
        </form>
    </div> );
}
 
export default AddVideos;