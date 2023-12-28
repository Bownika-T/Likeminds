import Tobpar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
//import Navbar from"../../components/navbar/Navbar";
import "./home.css"



export default function Home() {
  return (
    <>
    
   <Tobpar/>
   <div className="homeContainer">
   <Sidebar/>
   <Feed/>
   <Rightbar/>
   
   </div>
   </>
  )
}
