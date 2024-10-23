import "../cr/cr.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../component/userContext/UserContext";
import { useContext, useEffect } from "react";
const Cr = () => {
    const { fetchCRList,crList} = useContext(UserContext);
    useEffect(() => {
        fetchCRList();
    }, [fetchCRList]);
    console.log(crList);
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
          {crList.map((item, ind) => (
            <tr>
              <td data-label="SR.No">{ind + 1}</td>
              <td data-label="Project Name">{item.projectName}</td>
              <td data-label="Module Name">{item.moduleName}</td>
              <td data-label="ADD By"> </td>
              <td data-label="Date"></td>
              <td data-label="Edit"><Link >Edit</Link></td>
              <td data-label="Download"></td>
            </tr>
               ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cr;
