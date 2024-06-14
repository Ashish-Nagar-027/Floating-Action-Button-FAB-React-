import { useState } from 'react';
import ReactDOM from 'react-dom';
import suggetionsIcon from "../assets/giveSuggetions.png"
import FabButton from "../assets/Fab - D.png"
import reportIcon from "../assets/reportflagicon.png"
import shareFeedbackIcon from "../assets/shareFeedback.png";
import contack from "../assets/contact.png";
import closeIcon from "../assets/closeFab.png";
import FabBtn from './FabBtn';
import FormModal from './FormModal';
import FloatingMenuBtns from './FloatingMenuBtns';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuItemOpened, setIsMenuItemOpened] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
   !isOpen && setIsMenuItemOpened(null)
  };



   const menuElement = (
     <div className="Feedback fab-menu ">
       {isMenuItemOpened !== null && (
         <FormModal
           setIsMenuItemOpened={setIsMenuItemOpened}
           isMenuItemOpened={isMenuItemOpened}
           toggleMenu={toggleMenu}
         />
       )}

       <div
         className={
           isMenuItemOpened
             ? "fab-menu fab-menu-left hidden-menu "
             : " fab-menu "
         }
       >
         <FabBtn
           setIsMenuItemOpened={setIsMenuItemOpened}
           isMenuItemOpened={isMenuItemOpened}
           iconName={"reportIcon"}
           icon={reportIcon}
           btnName={"Report and issue"}
         />

         <FabBtn
           setIsMenuItemOpened={setIsMenuItemOpened}
           isMenuItemOpened={isMenuItemOpened}
           iconName={"shareFeedBack"}
           icon={shareFeedbackIcon}
           btnName={"Share Feedback"}
         />

         <FabBtn
           setIsMenuItemOpened={setIsMenuItemOpened}
           isMenuItemOpened={isMenuItemOpened}
           iconName={"suggetionsIcon"}
           icon={suggetionsIcon}
           btnName={"Give Suggestion"}
         />

         <FabBtn
           setIsMenuItemOpened={setIsMenuItemOpened}
           isMenuItemOpened={isMenuItemOpened}
           iconName={"contactUs"}
           icon={contack}
           btnName={"Contact Us"}
         />
       </div>
     </div>
   );



  return (
    <div className="fab-container">
      <button
        className={
          isMenuItemOpened
            ? "fab fab-menu-item close-btn-bottom"
            : isMenuItemOpened !== "close" 
            ? "fab fab-menu-item"
            : "fab fab-menu-item"
        }
        onClick={toggleMenu}
      >
        {isOpen ? <img src={closeIcon} /> : <img src={FabButton} />}
      </button>
      {isOpen && ReactDOM.createPortal(menuElement, document.body)}
    </div>
  );
};

export default FloatingActionButton;