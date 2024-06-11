import profileIcon from "../assets/profile icon.png"
import downArrow from "../assets/Vector 1.png"
import Arrow2 from "../assets/Arrow 2.png"
import QuestionCard from "../components/QuestionCard";
import AnswerHeader from "../components/AnswerHeader";
import AnswerCard from "../components/AnswerCard";

function Home() {
  return (
    <div className="homeComponent">
      {/* header */}
      <div className="nav-header">
        <p>
          THE <span>PRODUCT</span> PLATFORM
        </p>
        <div className="right-nav">
          <ul>
            <li>
              Learn <img src={downArrow} alt="" />
            </li>
            <li>
              Practice <img src={downArrow} alt="" />
            </li>
          </ul>
          <div className="profile">
            <img src={profileIcon} alt="" />
          </div>
        </div>
      </div>
      {/* nav top */}
      <div className="back-nav">
        <img src={Arrow2} alt="" />
        <p>Back To Questions</p>
      </div>
      {/* main body */}
      <div className="mainContainer">
        <QuestionCard />
        <AnswerHeader />
        <AnswerCard />
      </div>
    </div>
  );
}

export default Home;
