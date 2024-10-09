import "../header/header.css";
const Header = () => {
  return (
    <>
      <div className="Header-container">
        <div className="leftside-header"></div>
        <div className="rightside-header">
          <input className="search-box" />
          <button className="search-button">Search</button>
        </div>
      </div>
    </>
  );
};
export default Header;
