import "../cr/cr.css";
import { Link } from "react-router-dom";

const Cr = () => {
  return (
    <>
      <div className="rdd-container">
        <Link to="/crForm">
          <button className="top-right-button"> + </button>
        </Link>
        <table>
          <thead>
            <tr>
              <th>SR.No</th>
              <th>Project Name</th>
              <th>Module Name</th>
              <th>ADD By</th>
              <th>Date</th>
              <th>Edit</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="SR.No"></td>
              <td data-label="Project Name"></td>
              <td data-label="Module Name"></td>
              <td data-label="ADD By"></td>
              <td data-label="Date"></td>
              <td data-label="Edit"></td>
              <td data-label="Download"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cr;
