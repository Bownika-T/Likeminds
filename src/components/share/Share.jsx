import "./share.css"
import {PermMedia,Label,Room,EmojiEmotions, } from "@mui/icons-material"

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImag"src="/assets/person/download (1).jpeg" alt=""/>
          <input placeholder="What's in your mind?" 
          className="shareInput"
           />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareoption">
              <PermMedia htmlColor="tomato" className="shareIcon"/>
              <span className="shareOptionText">photo or Video</span>
            </div>
            <div className="shareoption">
              <Label htmlColor="blue" className="shareIcon"/>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareoption">
              <Room htmlColor="green" className="shareIcon"/>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareoption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
              <span className="shareOptionText">Feeelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>

    </div>
  )
}

