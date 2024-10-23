import { UserContext } from "../../component/userContext/UserContext";
import "../frdList/frdList.css"
import { useContext } from "react";
const FrdList = () => {
    const {fetchfrdList ,frdList} = useContext(UserContext);
  return (
    <>
      <div className="frdList">
        <table>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Client Name</th>
              <th>TimeLine</th>
              <th>Amount</th>
              <th>Edit</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {frdList. map((item, ind)=>(
            <tr>
              <td data-label="Project Name"></td>
              <td data-label="Client Name"></td>
              <td data-label="TimeLine"></td>
              <td data-label="Amount"></td>
              <td data-label="Edit"></td>
              <td data-label="Download"></td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default FrdList;
