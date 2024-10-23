import { useEffect, useState } from "react";
import "../brd/brd.css";
import { TbSquareRoundedArrowRightFilled } from "react-icons/tb";
import { UserContext } from "../../component/userContext/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Brd = () => {
  const [brdName, setBrdName] = useState([]);
const {setBrdId} = useContext(UserContext)
  useEffect(() => {
    const fetchBrdName = async () => {
      try {
        const response = await axios.get(
          "http://192.168.31.117:8086/api/name/list"
        );
        if (response) {
          setBrdName(response.data);
        }
      } catch (error) {
        console.log("brdnameList", error);
      }
    };
    fetchBrdName();
  }, []);
  console.log("brdName", brdName);
  return (
    <>
      <div className="brd-container">
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#334155",
          }}
        >
          <Link to="/brdList" className="frd-top-right-button">
            BRD List
          </Link>
          <h3>Create BRD Document For Following Project :</h3>
        </div>

      <div className="brd-text-container">
      {brdName.map((item, ind) => (
          <Link to="/brdFormPage" style={{ textDecorationLine: "none" }}>
            <div className="text-icon-container" >
              <TbSquareRoundedArrowRightFilled
                style={{ height: "30px", width: "30px" }}
              />

              <p onClick={()=>{setBrdId(item.pid)}}>{item.projectname}</p>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </>
  );
};
export default Brd;
