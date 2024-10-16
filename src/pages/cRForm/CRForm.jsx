import React from "react";
import "../cRForm/cRForm.css";

const ChangeRequestTable = () => {
  return (
    <div className="change-request-table">
    

      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{ width: "98.5%", backgroundColor: "white" }}
      >
       
            <tr  >  <td colSpan="4" style={{backgroundColor:'white', textAlign:'center',padding:'20px', fontSize:'25px',fontWeight:'bolder'}}> <b>Change Request Form</b></td></tr>
          <tr>
            <td colSpan="2" style={{ backgroundColor: "white" }}>
              <b>Change Request ID:</b> <input type="text" className="td_input" />
            </td>
            <td colSpan="2" style={{ backgroundColor: "white" }}>
              <b>Report ID:</b> <input type="text" name="" className="td_input"  />
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={{ backgroundColor: "white" }}>
             <b> Project Name:</b> <input type="text" name="" className="td_input" />
            </td>
            <td colSpan="2" style={{ backgroundColor: "white" }}>
              <b>Module Name: </b><input type="text" name="" className="td_input" />
            </td>
          </tr>
      
        <tbody>
          <tr>
            <td colSpan="1">
              <b>
                Problem Statement: <br />
              </b>
              Provide a brief description of the requested change
            </td>
           <textarea name="" id="" className="textarea_input"></textarea>
          </tr>

          <tr>
            <td colSpan="1" rowSpan={3}>
              <br />
              <b>Requester Details:</b>
            </td>
            <td>
              <b>Name</b>
            </td>
            <td>
              <b>Position</b>
            </td>
            <td>
              <b>Contact Information</b>
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td>
            <textarea name="" id="" className="sub_input"></textarea>
            </td>
            <td>
            <textarea name="" id="" className="sub_input"></textarea>
            </td>
            <td>
            <textarea name="" id="" className="sub_input"></textarea>
            </td>
          </tr>

          <tr>
            <td colSpan="1" rowSpan={3}>
              <br />
              <b>Where & When Change Requested:</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>Date</b>
            </td>
            <td>
              <b>Location</b>
            </td>
            <td>
              <b>Time</b>
            </td>
          </tr>
          <tr>
            <td>
              <input type="date" name="" id=""  className="sub_input"/>
            </td>
            <td>
            <textarea name="" id="" className="sub_input"></textarea>
            </td>
            <td>
            <textarea name="" id="" className="sub_input"></textarea>
            </td>
          </tr>

          <tr>
            <td colSpan="1">
              <b>Description of Problem:</b> <br /> Provide a detailed
              description of the problem, circumstances leading to the requested
              change
            </td>
            <td colSpan={3}>
            <textarea name="" id="" className="textarea_input"></textarea>
            </td>
          </tr>

          <tr>
            <td colSpan="1">
              <b>Supporting Information:</b> <br />
              Provide screenshots of an error or printout of an error in a
              document / report.
            </td>
            <td colSpan={3}>
            <textarea name="" id="" className="textarea_input"></textarea>
            </td>
          </tr>
          <tr>
            <td colSpan="1">
              <b> Reasons and Justification:</b> <br />
              Describe the reason why the change has been requested and the
              justification for the request
            </td>
            <td colSpan={3}>
            <textarea name="" id="" className="textarea_input"></textarea>
            </td>
          </tr>
          <tr>
            <td colSpan="1" rowSpan={3}>
                <br />
              <b> Affected Areas:</b> <br />
              According to the Perception of the Requester
            </td>
          </tr>
          <tr>
            <td>
              <b>System Affected</b>
            </td>
            <td>
              <b>Subsystem Affected</b>
            </td>
            <td>
              <b>Documentation Affected</b>
            </td>
          </tr>
          <tr>
            <td>
           <textarea name="" id="" className="sub_input"></textarea>
            </td>
            <td>
            <textarea name="" id="" className="sub_input"></textarea>
            </td>
            <td> 
            <textarea name="" id="" className="sub_input"></textarea>
            </td>
          </tr>
          <tr>
            <td colSpan="1">
              <b> Alternate Actions:</b> <br />
              Describe alternatives to the change according to the Perception of
              the Requester
            </td>
            <td colSpan={3}>
            <textarea name="" id="" className="textarea_input"></textarea>
            </td>
          </tr>
          <tr>
            <td colSpan="1">
              <b> Priority to Implement:</b> <br />
              Describe priority assigned by the requester- may be on a Five
              Point Scale
            </td>
            <td colSpan={3}>
            <textarea name="" id="" className="textarea_input"></textarea>
            </td>
          </tr>
          <tr>
            <td colSpan="1" rowSpan={3}>
              <b> Status:</b> <br />
            </td>
          </tr>
          <tr>
            <td>
              <b>System Affected</b>
            </td>
            <td>
              <b>Subsystem Affected</b>
            </td>
            <td>
              <b>Documentation Affected</b>
            </td>
          </tr>
       
        </tbody>
        
      </table>
      <button className="submit-button" style={{marginLeft:'100px'}}> Submit</button>

    </div>
  );
};

export default ChangeRequestTable;
