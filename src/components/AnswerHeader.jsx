

function AnswerHeader() {
  return (
    <div className="answerHeader">
      <p>Answers(23)</p>
      <div>
        <label htmlFor="Answers">Sort By: </label>
     
          <select name="Answers" id="Answers">
            <option value="popularity">Popularity</option>
            <option value="Rating">Rating</option>
          </select>
        
      </div>
    </div>
  );
}

export default AnswerHeader