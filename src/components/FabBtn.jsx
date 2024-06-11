



function FabBtn({isMenuItemOpened, setIsMenuItemOpened,icon, iconName, btnName }) {
  

   

  return (
    <button
      className={isMenuItemOpened === btnName ?"fab-menu-item opened " :  "fab-menu-item "}
      onClick={() => setIsMenuItemOpened(btnName)}
    >
      {isMenuItemOpened ? (
        ""
      ) : (
        <label htmlFor={iconName}>{btnName}</label>
      )}
      <img name="reportIcon" id={iconName} src={icon} />
    </button>
  );
}

export default FabBtn