import companylogo from "../assets/comcompany type2.png";
import alertIcon from "../assets/alertIcons.png";
import { FaRegEye } from "react-icons/fa";

function QuestionCard() {
  return (
    <div className="question-card">
      <div className="question-card-top">
        <div className="question-tags">
          <p>Design</p>
          <p>Technology</p>
        </div>
        <img src={companylogo} />
      </div>

      <div className="question">
        <p className="question-title">
          A travel startup wants Amazon to pre-install their personal travel
          agent bot on existing Amazon Echos. What is the value of the
          partnership to the travel startup?
        </p>
        <p className="question-description">
          Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec
          viverra tincidunt ? Amet ullamcorper velit tristique scelerisque donec
          sed viverra arcu. Amet arcu vitae sit scelerisque ultrices magna
          cursus se?
        </p>
      </div>

      <div className="question-card-bottom">
        <p >
          <FaRegEye size={16} style={{marginRight:'5px'}} /> 100 Views
        </p>

        <p>
          <img src={alertIcon} />
          How should you word your answer?
        </p>
      </div>
    </div>
  );
}

export default QuestionCard;
