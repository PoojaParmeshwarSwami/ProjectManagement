import { useState } from "react";
import "../brdFormPage/brdFormPage.css";
import axios from "axios";
const FrdFormPage = ()=>{
    const [brdData, setBrdData] = useState({
        fullname: "",
        mobile: "",
        email: "",
        amount: "",
        timeline: "",
        projectid: 7,
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setBrdData({ ...brdData, [name]: value });
      };
    
      const handleSave = async (e) => {
        e.preventDefault();
        console.log("brddata", brdData);
        try {
          const response = await axios.post(
            "http://192.168.31.117:8086/api/add",
            brdData
          );
    
          if (response.status === 200) {
            console.log("Data saved successfully:", response.data);
            alert("Form data saved successfully");
          } else {
            console.log("Error while saving data", response);
          }
        } catch (error) {
          console.error("Error during save:", error);
          alert(error);
        }
      };
      return (
        <>
          <div className="brd-form-container">
            <form action="">
              <div className="info">
                <div className="customer-info-text">
                  <h3>Customer Information : </h3>
                </div>
                <div className="label-input">
                  <label htmlFor="">Full Name </label> <br />
                  <input
                    type="text"
                    style={{ width: "82%" }}
                    name="fullname"
                    value={brdData.fullname}
                    onChange={handleChange}
                  />
                  <div style={{ display: "flex", gap: "2%" }}>
                    <div>
                      <label htmlFor="">Mobile</label> <br />
                      <input
                        type="number"
                        style={{ width: "300px" }}
                        name="mobile"
                        value={brdData.mobile}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="">Email </label>
                      <br />
                      <input
                        type="email"
                        style={{ width: "305px" }}
                        name="email"
                        value={brdData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "2%" }}>
                    <div>
                      <label htmlFor="">Amount</label> <br />
                      <input
                        type="number"
                        style={{ width: "300px" }}
                        name="amount"
                        value={brdData.amount}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="">TimeLine(In Days) </label>
                      <br />
                      <input
                        type="number"
                        style={{ width: "305px" }}
                        name="timeline"
                        value={brdData.timeline}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <button className="brd-submit-button" onClick={handleSave}>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      );
};
export default FrdFormPage;