import { useState } from "react";
import '../styles/videos.css'
import { useEffect } from "react";

const Videos = () => {
    let [video,setVideo] = useState([])
    let [short,setShort]=useState([])

    useEffect(()=>{
        
        let fetchData=async()=>{
            // let responce1=await fetch('http://localhost:400/youtube')
            // let data=await responce1.json()
            // setVideo(data.videos)
            // setShort(data.shorts)

            let responce1=await fetch('http://localhost:4000/videos')
             let data=await responce1.json()
             setVideo(data)

             let responce2=await fetch(' http://localhost:4000/shorts')
             let data1=await responce2.json()
             setShort(data1)
        }
        fetchData()
    })

    let removeVideo = (id,name) =>{
        fetch(`http://localhost:4000/videos/${id}`,{
            method:'DELETE'
        })
        alert(`${name} video got removed`)

        // let result = video.filter( (x)=> x.id!==id )
        // setVideo(result)
        // alert(`${name} video got removed`)

    }

    
    let removeshort=(id)=>{
        fetch(`http://localhost:4000/shorts/${id}`,{
            method:'DELETE'
        })
        // alert(`${name} short got removed`)

        // let result=short.filter((x)=>x.id!==id)
        // setShort(result)
        // alert(`${name} short got removed`)
    }
    
    return (
        <div className="videos">
               <h1>featured videos</h1>
               <div className="videoData">
               {video.map((data)=>{
                return(
                    <div className="video">
                        <img src={data.thubnail} alt="" />
                       <div className="videoDetailes">
                       <h3>{data.title}</h3>
                        <p>{data.views}</p>
                        <br />
                        <h4 onClick={()=>removeVideo(data.id,data.channel)}>Remove</h4>
                       </div>
                    </div>
                )
               })} 
               </div>
               <h1>youtube shorts</h1>
               <div className="shortsData">
               {short.map((data)=>{
                return(
                    <div className="short">
                        <img src={data.thubnail} alt="" />
                       <div className="shortDetails">
                       <h3>{data.title}</h3>
                        <p>{data.views}</p>
                        <h4 style={{cursor:"pointer",display:"inline-block"}} onClick={()=>removeshort(data.id)}>Remove</h4>
                       </div>
                    </div>
                )
               })} 

               </div>
                
        </div>
      );
}
 
export default Videos;