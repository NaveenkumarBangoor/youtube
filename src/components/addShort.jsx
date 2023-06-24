import '../styles/addShort.css'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const AddShort = () => {

    let thumbnail=useRef(null)
    let title=useRef(null)
    let views=useRef(null)
    let navigate=useNavigate()

    let upload=(e)=>{
          e.preventDefault()

          let data={
            thumbnail:thumbnail.current.value,
            title:title.current.value,
            views:views.current.value
          }

          fetch('http://localhost:4000/shorts',{
            method:'post',
            headers:{'Content-Type':'Application/json'},
            body:JSON.stringify(data)
          })
          alert(`${data.title} got added`)
          navigate('/')
    }
    return (  
        <div className="shortDet">
             <h1>Enter Short Detailes</h1>
             <form onSubmit={upload}>
               <input ref={thumbnail} type="url" placeholder='enter your thumbnail' />
               <input ref={title} type="text" placeholder='enter your title' />
               <input ref={views} type="text" placeholder='enter your views' />
               <button>submit</button>
             </form>
        </div>
    );
}
 
export default AddShort;