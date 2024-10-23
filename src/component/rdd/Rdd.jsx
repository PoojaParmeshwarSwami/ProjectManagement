import "../rdd/rdd.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../component/userContext/UserContext";
import { useContext, useEffect } from "react";

const Rdd = () => {
  const { fetchData, data } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  console.log(data);
  return (
    <>
      <div className="rdd-container">
        <Link to="/rddFormPage">
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
            {data.map((item, ind) => (
              <tr key={ind}>
                <td data-label="SR.No">{ind + 1}</td>
                <td data-label="Business Name">{item.businessName}</td>
                <td data-label="Business Nature">{item.businessNature}</td>
                <td data-label="ADD By"></td>
                <td data-label="Date">{item.createddate}</td>
                <td data-label="Edit"><Link>Edit</Link></td>
                <td data-label="Download"><Link>Download</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Rdd;
