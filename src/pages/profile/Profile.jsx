import "./profile.css"
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
export default function Profile() {
  return (
    <>
    <Topbar/>
<div className="profile">
      <Sidebar/>
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">

        <img  className="profileCoverImg" src="assets/post/13.jpg"/>
          <img  className="profileUserImg" src="assets/person/7.jpeg"/>
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Johnson</h4>
            <span className="profileInfoDesc">Hello My Friends!</span>
          </div>
        </div>
        <div className="profileRightBottom">
        <Feed/>
      <Rightbar profile/>
      </div>
    </div>
    </div>
    </>
      );
}
