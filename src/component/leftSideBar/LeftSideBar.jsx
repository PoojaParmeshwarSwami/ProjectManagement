import "../leftSideBar/leftSideBar.css"
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const LeftSideBar = () => {
  return (
    <>
      <div className="leftdash-container">

        <Link to="/" className="leftdash-item">
          <FaUserAlt className="leftdash-icons" /> DashBoard </Link>

        <Link to="/rdd" className="leftdash-item">
          <FaUserAlt className="leftdash-icons" /> RDD</Link>
          <Link  className="leftdash-item">
          <FaUserAlt className="leftdash-icons" /> BRD</Link>
          <Link  className="leftdash-item">
          <FaUserAlt className="leftdash-icons" /> FRD</Link>
          <Link className="leftdash-item">
          <FaUserAlt className="leftdash-icons" /> CR</Link>

      </div>
    </>
  );
};
export default LeftSideBar;
