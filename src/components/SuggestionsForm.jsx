import { useState } from "react";
import attachFileIcon from '../assets/Vector.png'

function SuggestionsForm() {
  const [allowFormSubmit, setAllowFormSubmit] = useState(false);
  const [inputs, setInputs] = useState({
    describe: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [isFormSubmited, setIsFormSubmitted] = useState(false)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)

  function handleFormSubmit() {
    allowFormSubmit ? setIsFormSubmitted(true) : setIsFormSubmitted(false);
  }


  function handleInputChange(e) {
    const value = e.target.value;
    setInputs({ ...inputs, [e.target.name] :value});
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
          Thanks for your valueable Suggestion
        </p>
    );
   }


     return (
       <div className="feedbackForm">
         <p className="formTitle">
           Share your <span> Suggestions </span> with us for a chance to earn
           rewards!
         </p>
         <div className="line"></div>
        
         <div className="input-container">
           <label htmlFor="select-input-container">Choose a section</label>
           <select name="interview" id="select-input-container">
             <option value="option 2">Intervew Questions</option>
           </select>
         </div>

         <div className="Description">
           <label htmlFor="describe-input">Describe the suggestion in detail</label>
           <div className="textareacontainer">
             <textarea
               rows="4"
               cols="50"
               placeholder="Write here..."
               id="describe-input"
               maxLength={500}
               value={inputs.queries}
               name="describe"
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

export default SuggestionsForm;
