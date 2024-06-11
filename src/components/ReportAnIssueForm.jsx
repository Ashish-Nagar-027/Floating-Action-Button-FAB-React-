import { useState } from "react";
import attachFileIcon from '../assets/Vector.png'

function ReportAnIssueForm() {
  const [allowFormSubmit, setAllowFormSubmit] = useState(false);
  const [inputs, setInputs] = useState({ issueDescription: "" });
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFormSubmited, setIsFormSubmitted] = useState(false)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)

  function handleFormSubmit() {
    allowFormSubmit ? setIsFormSubmitted(true) : setIsFormSubmitted(false);
  }


  function handleInputChange(e) {
    const value = e.target.value;
    setInputs({ issueDescription: value });
    setAllowFormSubmit(value.length >= 1);
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
          Thanks for bringing the issue to our attention. We'll review it
          shortly and provide an update soon!
        </p>
    );
   }


     return (
       <div className="ReportAnIssue-form">
         <p className="formTitle">
           Let us know about the <span>Issue</span> you are facing right now!
         </p>
         <div className="line"></div>
         <div className="input-container">
           <label htmlFor="select-input-container">Choose a section</label>
           <select name="interview" id="select-input-container">
             <option value="option 2">Intervew Questions</option>
           </select>
         </div>
         <div className="issueDescription">
           <label htmlFor="describe-issue">Describe the issue in detail</label>
           <div className="textareacontainer">
             <textarea
               rows="4"
               cols="50"
               placeholder="Write here..."
               name="describe-issue"
               id="describe-issue"
               maxLength={500}
               value={inputs.issueDescription}
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

export default ReportAnIssueForm;
