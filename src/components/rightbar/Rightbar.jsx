import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayimg" src="assets/gift img.jpg" alt=""/>
          <span className="birthdayText">
            <b>Pola Foster</b>and <b>3 other friends</b>have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="assets/gettyimages-1.jpg" alt=""/>
        <h4 className="rightbartitle">Online Friends</h4>
        <ul className="rightFriendList">
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
                <img className="rightbarProfile" 
                  src="assets/person/images 4.jpeg"
                   alt="" 
                />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Sai Rithvik</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
