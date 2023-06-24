import YTlogo from '../images/YTlogo.png'
import Vicon from '../images/videoIcon.png'
import Search from '../images/search.png'
import Mic from '../images/mic.png'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
function Navbar(){
    return(
        <div className="Navbar">
          <div className="logo">
            <img width={150} src={YTlogo} alt="" />
          </div>
          <div className="searchBar">
           <input type="text"  placeholder="search"/>
           <img width={30} src={Search} alt="" />
           <img width={35} src={Mic} alt="" />
          </div>
          <div className="userOptions">
           <div className="video">
           <img width={35} src={Vicon} alt="" />
           </div>
           <div className="navLinks">
                    <div className="Link1">
                      <Link to="/">Home</Link>
                    </div>
                    <div className="Link2">
                      <Link to="/addVideo">addVideo</Link>
                    </div>
                </div>
              <div className="profile">
            <h4>N</h4>
           </div>
          </div>
        </div>
    );
}
export default Navbar;