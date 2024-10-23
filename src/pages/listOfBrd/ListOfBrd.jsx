import "../listOfBrd/listOfBrd.css";
import { UserContext } from "../../component/userContext/UserContext";
import { useContext, useEffect } from "react";

const ListOfBrd = () => {

    const { fetchBrdiLst,brdList,brdId } = useContext(UserContext);
    useEffect(() => {
        fetchBrdiLst();
    }, [fetchBrdiLst]);
    console.log("brdList ====",brdList);
  return (
    <>
      <div className="ListOfBrd">
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
          {brdList.map((item, ind) => (
            <tr>
              <td data-label="Project Name">{item.projectname}</td>
              <td data-label="Client Name">{item.fullname}</td>
              <td data-label="TimeLine">{item.timeline}</td>
              <td data-label="Amount">{item.amount}</td>
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
export default ListOfBrd;
