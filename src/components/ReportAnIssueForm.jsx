

function ReportAnIssueForm() {
  return (
    <div className="ReportAnIssue-form">
      <p>Let us know about the Issue  you are facing right now!</p>
      <div className="line"></div>
      <div className="input-container">
        <label htmlFor="select-input-container">Choose a section</label>
        <select name="interview" id="options">
          <option value="option 2"> Intervew Questions</option>
        </select>
      </div>
      <div className="issueDescription">
        <label htmlFor="describe-issue">Describe the issue in detail</label>
        <textarea placeholder="Write here..." name="describe-issue" id="describe-issue"></textarea>
      </div>
    </div>
  );
}

export default ReportAnIssueForm