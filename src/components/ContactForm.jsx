import { useState } from "react";
import attachFileIcon from "../assets/Vector.png";

function ContactForm() {
  const [allowFormSubmit, setAllowFormSubmit] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    number: "",
    queries: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFormSubmited, setIsFormSubmitted] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  function handleFormSubmit() {
    allowFormSubmit ? setIsFormSubmitted(true) : setIsFormSubmitted(false);
  }

  function handleInputChange(e) {
    const value = e.target.value;
    setInputs({ ...inputs, [e.target.name]: value });

    setAllowFormSubmit(() => { 
      if (inputs.queries.length <= 1 || inputs.name.length <= 1) return false;
    
        if(!isUserLoggedIn) {
         if (inputs.email.length <= 1 || inputs.number.length <= 10) {
           return false;
         }
         return true
        }
        return true;
    });
  }

  function handleAttachClick() {
    document.getElementById("fileInput").click();
  }

  function handleFileChange(e) {
    setSelectedFile(e.target.files[0]);
  }

  if (isFormSubmited) {
    return (
      <p className="ReportAnIssue-form thanksmsg">
        Thanks for reaching out to us! We will get back to you as soon as
        possible
      </p>
    );
  }

  return (
    <div className="feedbackForm">
      <p className="formTitle">
        Let us know about the <span>your queries</span> are
      </p>
      <div className="line"></div>
      <div className="input-container">
        <label htmlFor="select-input-container">Your Name</label>
        <input
          onChange={handleInputChange}
          name="name"
          type="text"
          placeholder="Enter Your Name"
        />
      </div>
      {!isUserLoggedIn && (
        <>
          <div className="input-container">
            <label htmlFor="select-input-container">Your Email</label>
            <input
              onChange={handleInputChange}
              name="email"
              type="text"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="input-container">
            <label htmlFor="select-input-container">Your Mobile Number</label>
            <input
              onChange={handleInputChange}
              name="number"
              type="text"
              placeholder="Enter your number"
            />
          </div>
        </>
      )}
      <div className="Description">
        <label htmlFor="describe-input">what would you like to ask?</label>
        <div className="textareacontainer">
          <textarea
            rows="4"
            cols="50"
            placeholder="Write here..."
            id="describe-input"
            maxLength={500}
            value={inputs.queries}
            name="queries"
            onChange={handleInputChange}
          ></textarea>
          <button onClick={handleAttachClick} className="attach-button">
            <img src={attachFileIcon} /> Attach an file
          </button>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
        {selectedFile && <p>Attached file: {selectedFile.name}</p>}
      </div>

      {!isUserLoggedIn && (
        <div className="input-container">
          <label htmlFor="email-input">
            Enter your email to receive an update
          </label>
          <input
            type="text"
            htmlFor="email-input"
            id="email-input"
            placeholder="enter your email"
          />
        </div>
      )}

      <button onClick={handleFormSubmit} disabled={!allowFormSubmit}>
        Submit
      </button>
    </div>
  );
}

export default ContactForm;
