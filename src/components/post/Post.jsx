import "./post.css";
import { MoreVert } from "@mui/icons-material";

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
        <div className="postTop">
        <div className="postTopLeft">
        <img className="postProfileImg" 
        src="/assets/person/download3.jpeg" 
        alt=""/>
        <span className="postUsername">safak</span>
        <span className="postData">5 mins ago</span>

    </div>
    <div className="postTopright"></div>
    <MoreVert/>
    </div>
    <div className="postCenter">
    <span className="postText">Hey! its my first post..</span>
    <img className="postImg" src="/assets/post/download 2.jpeg" alt=""/>
    </div>
    

    <div className="postBottom">
        <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt=""/>
            <img className="likeIcon" src="assets/pic like.jpg" alt=""/>
            <span className="postLikeCounter">32 people like  it</span>
        </div>
        
        <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
        </div>
        
    </div>
    </div>
    </div>
    
  )
}
