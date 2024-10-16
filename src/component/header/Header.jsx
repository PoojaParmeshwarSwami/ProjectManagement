import "../header/header.css";

import logo from "/src/assets/microdynamicLogo.png";
const Header = () => {
  return (
    <>
      <div className="Header-container">
        <div className="leftside-header">
            <img src={logo} alt="" />
        </div>
        <div className="rightside-header">
          <input className="search-box" />
          <button className="search-button">Search</button>
        </div>
      </div>
    </>
  );
};
export default Header;
