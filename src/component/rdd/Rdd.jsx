import "../rdd/rdd.css";
import { Link } from "react-router-dom";

const Rdd = () => {
  return (
    <>
      <div className="rdd-container">
        <Link > 
          <button className="top-right-button"> + </button>
        </Link>
        <table>
          <thead>
            <tr>
              <th>SR.No</th>
              <th>Business Name</th>
              <th>Business Nature</th>
              <th>ADD By</th>
              <th>Date</th>
              <th>Edit</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="SR.No"></td>
              <td data-label="Business Name"></td>
              <td data-label="Business Nature"></td>
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

export default Rdd;
