
import ContactForm from './ContactForm';
import ShareFeedbackForm from './ShareFeedbackForm';
import SuggestionsForm from './SuggestionsForm';
import ReportAnIssueForm from './ReportAnIssueForm';

function FormModal({ isMenuItemOpened }) {


  return <div className="formModal">
    {isMenuItemOpened === "Contact Us" ? <ContactForm /> 
    : isMenuItemOpened === "Share Feedback" ? <ShareFeedbackForm />
    : isMenuItemOpened === "Give Suggestion" ? <SuggestionsForm />
    : isMenuItemOpened === "Give Suggestion" ? <SuggestionsForm />
    : <ReportAnIssueForm />
}
</div>;
 }

export default FormModal