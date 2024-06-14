import React from 'react'
import FormModal from './FormModal';
import FabBtn from './FabBtn';

import suggetionsIcon from "../assets/giveSuggetions.png";
// import FabButton from "../assets/Fab - D.png";
import reportIcon from "../assets/reportflagicon.png";
import shareFeedbackIcon from "../assets/shareFeedback.png";
import contack from "../assets/contact.png";
import closeIcon from "../assets/closeFab.png";



function FloatingMenuBtns({
  isMenuItemOpened,
  
  setIsMenuItemOpened,
  
}) {
  return (
    <div className="Feedback ">
      <div className={" fab-menu-top "}>
        <FabBtn
          setIsMenuItemOpened={setIsMenuItemOpened}
          isMenuItemOpened={"close"}
          iconName={"close"}
          icon={closeIcon}
          btnName={"close"}
        />

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
}

export default FloatingMenuBtns


 
