import profileImg from '../assets/profile icon.png'
import likeIcon from '../assets/like.png'
import commentIcon from '../assets/comment.png'
import { RiEditFill } from "react-icons/ri";


function AnswerCard() {
  return (
    <div className="answer-card">
      <div className="answer-card-top">
        <div className="answercard-profile">
          <img src={profileImg} />
          <div>
            <p className="answercard-profile-name">
              Neha Bhat <span>(You)</span>
            </p>
            <p className="answercard-date">Jun 27, 2023</p>
          </div>
        </div>
        <div className='answercard-top-edit'>
          <RiEditFill /> <span>Edit</span>
        </div>
      </div>

      <div className="answer">
        <p className='answer-description'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est aperiam adipisci neque eius deserunt dicta quia sit, beatae magnam totam nam, rem accusantium esse pariatur ex reprehenderit quam ullam veniam sequi ad accusamus. Dolorum assumenda ab corporis cumque et. Minus quis possimus exercitationem rerum quo dolor eaque, obcaecati in odio!...
            <span>Show More</span>
        </p>
      </div>

      <div className="answer-card-bottom">
         <img src={likeIcon} />
          Like
         <img src={commentIcon} />
         <input type='text' placeholder='Add a comment' />
         <button>Post</button>
      </div>
    </div>
  );
}

export default AnswerCard