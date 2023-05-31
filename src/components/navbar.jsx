import YTlogo from '../images/YTlogo.png'
import Vicon from '../images/videoIcon.png'
import Bicon from '../images/bellIcon.png'
import Uicon from '../images/userIcon.png'
import '../styles/navbar.css'
function Navbar(){
    return(
        <div className="Navbar">
          <div className="logo">
            <img width={150} src={YTlogo} alt="" />
          </div>
          <div className="searchBar">
           <input type="text"  placeholder="search"/>
          </div>
          <div className="userOptions">
           <div className="video">
           <img width={35} src={Vicon} alt="" />
           </div>
            <div className="notification">
            <img width={35} src={Bicon} alt="" />
            </div>
           <div className="profile">
           <p>N</p>
           </div>
            {/* <img width={35} src={Uicon} alt="" /> */}
          </div>
        </div>
    );
}
export default Navbar;