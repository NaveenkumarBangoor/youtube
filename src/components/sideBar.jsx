import '../styles/side.css'
import Home from '../images/home.png'
import History from '../images/history.png'
import Library from '../images/library.png'
import Like from '../images/like.png'
import Shopping from '../images/shopping.png'
import Subscription from '../images/subscription.png'
import Trending from '../images/trending.png'

const SideBar = () => {
    let sideBar=[
        {
            val:"Home",
            img:Home
        },{
             val:"Shorts",
             img:""
        },{
            val:"Subcriptions",
            img:Subscription
        },{
            val:"Library",
            img:Library
        },{
            val:"History",
            img:History
        },{
            val:"Your videos",
            img:""
        },{
            val:"Watch later",
            img:""
        },{
            val:"Liked",
            img:""
        },{
            val:"Trending",
            img:Trending
        },{
            val:"Shopping",
            img:Shopping
        }
    ]
    return ( 
        <div className="SideBar">
                <ul>
                {sideBar.map((data)=>{
               return(
                <li><img style={{width:'25px',height:'25px'}} src={data.img} alt="" /><a >{data.val}</a></li>
               )
                })}
            </ul>
        </div>
     );
}
 
export default SideBar;