
import ContactForm from './ContactForm';
import ShareFeedbackForm from './ShareFeedbackForm';
import SuggestionsForm from './SuggestionsForm';
import ReportAnIssueForm from './ReportAnIssueForm';
import FloatingMenuBtns from './FloatingMenuBtns';

function FormModal({ isMenuItemOpened, setIsMenuItemOpened, toggleMenu }) {
  return (
    <div className="model-wrapper">
      <FloatingMenuBtns
        isMenuItemOpened={isMenuItemOpened}
        setIsMenuItemOpened={setIsMenuItemOpened}
        toggleMenu={toggleMenu}
      />

      <div className="formModal">
        {isMenuItemOpened === "Contact Us" ? (
          <ContactForm />
        ) : isMenuItemOpened === "Share Feedback" ? (
          <ShareFeedbackForm />
        ) : isMenuItemOpened === "Give Suggestion" ? (
          <SuggestionsForm />
        ) : isMenuItemOpened === "Give Suggestion" ? (
          <SuggestionsForm />
        )  : isMenuItemOpened === "close" ? (
          toggleMenu()
        ) : (
          <ReportAnIssueForm />
        )}
      </div>
    </div>
  );
}

export default FormModal