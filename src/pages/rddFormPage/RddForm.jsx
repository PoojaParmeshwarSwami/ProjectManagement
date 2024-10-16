import React, { useState } from "react";
import axios from "axios";
import "./rddFormPage.css"; // Adjust the path according to your file structure

const RddForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    businessNature: "",
    businessName: "",
    categoriesList: "",
    productSamples: "",
    video: "",
    logo: "",
    color: "",
    competitorLink: "",
    fontStyle: "",
    websiteFormat: "",
    businessDescription: "",
    usp: "",
    suggestions: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      const response = await axios.post(
        "http://192.168.31.117:8085/api/add",
        formData
      );

      if (response.status === 200) {
        console.log("Data saved successfully:", response.data);
        onSave(formData); // Pass the formData back to parent
        alert("Form data saved successfully");
      } else {
        console.log("Error while saving data", response);
      }
    } catch (error) {
      console.error("Error during save:", error);
      alert("Error saving data",error);
    }
  };

  return (
    <div className="rddForm-container">
      <h2>Requirement for Design UI of Project for Website / App Design / Software Development:</h2>
      <div className="table-container">
        <table>
          <tbody>
            {/* Mapping through the input fields to reduce repetition */}
            {Object.keys(formData).map((key, index) => (
              <tr key={index}>
                <td>{`${index + 1}. ${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:`}</td>
                <td>
                  {key.includes("List") || key.includes("Samples") || key.includes("Description") || key.includes("Suggestions") || key.includes("Link") || key.includes("USP") ? (
                    <textarea
                      name={key}
                      value={formData[key]}
                      onChange={handleInputChange}
                    ></textarea>
                  ) : (
                    <input
                      type="text"
                      name={key}
                      value={formData[key]}
                      onChange={handleInputChange}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="submit-button"
          onClick={() => {
            handleSave(); // Save data
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RddForm;
