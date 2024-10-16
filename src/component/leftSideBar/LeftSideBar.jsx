import "../leftSideBar/leftSideBar.css";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const LeftSideBar = () => {
  return (
    <>
      <div className="leftdash-container">
        <Link to="/" className="leftdash-item">
          <FaUserAlt className="leftdash-icons" /> DashBoard{" "}
        </Link>

        <Link to="/rdd" className="leftdash-item">
          <FaUserAlt className="leftdash-icons" /> RDD
        </Link>
        <Link to="brd" className="leftdash-item">
          <FaUserAlt className="leftdash-icons" /> BRD
        </Link>
        
        <Link to="/frd" className="leftdash-item">
          <FaUserAlt className="leftdash-icons" /> FRD
        </Link>
        <Link to="/cr" className="leftdash-item">
          <FaUserAlt className="leftdash-icons" /> CR
        </Link>
        <Link to="/nda" className="leftdash-item">
          <FaUserAlt className="leftdash-icons" /> NDA
        </Link>
      </div>
    </>
  );
};
export default LeftSideBar;
