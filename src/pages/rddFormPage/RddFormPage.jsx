import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";
import "../rddFormPage/rddFormPage.css";
import "jspdf-autotable";
import logo from "/src/assets/microdynamicLogo.png";
const RddFormPage = () => {
 
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
    suggestions: ""
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
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
        alert("Form data saved successfully");
      } else {
        console.log("Error while saving data", response);
      }
    } catch (error) {
      console.error("Error during save:", error);
      alert(error);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    const imgData = "/src/assets/microdynamicLogo.png"; // Replace this with your base64 image string
    const imgWidth = 80; // Set the width for your image
    const imgHeight = 14 // Maintain aspect ratio (example for a 16:9 image)
  
    // Add the image at (x: 20, y: 10)
    doc.addImage(imgData, 'JPEG', 62, 2, imgWidth, imgHeight);
  

    // Set title
    doc.setFontSize(28);
    doc.text("Requirement for Design UI of Project", 20,25);
    doc.setFontSize(12);

    // Create a table
    const tableData = [
      { field: "Business Nature: ", details: formData.businessNature || "N/A" },
      { field: "Business Name: ", details: formData.businessName || "N/A" },
      { field: "Categories List: ", details: formData.categoriesList || "N/A" },
      { field: "Product samples: ", details: formData.productSamples || "N/A" },
      { field: "Video if any: ", details: formData.video || "N/A" },
      { field: "Logo if yes share, if no share idea: ", details: formData.logo || "N/A" },
      { field: "Color specific if any: ", details: formData.color || "N/A" },
      { field: "Competitor Link: ", details: formData.competitorLink || "N/A" },
      { field: " Font style suggestions if any: ", details: formData.fontStyle || "N/A" },
      { field: "Website format or any layout suggestion: ", details: formData.websiteFormat || "N/A" },
      { field: "Business Description: ", details: formData.businessDescription || "N/A" },
      { field: "USP if any: ", details: formData.usp || "N/A" },
      { field: "Any other suggestions: ", details: formData.suggestions || "N/A" },
      // Add more fields as needed...
    ];

    // Define column widths (in mm)
    const columnWidths = [52.83, 120.75]; // Approx. 200px for each column

    // Use autoTable to create the table
    doc.autoTable({
      head: [["Field", "Details"]],
      body: tableData.map(item => [item.field, item.details]),
      startY: 30, // Starting Y position
      styles: { cellWidth: 'fixed' }, // Use fixed width for cells
      columnStyles: {
        0: { cellWidth: columnWidths[0],fontSize: 14, fontStyle: "bold", fontFamily:"Arial",textColor: [0, 0, 0]}, // Width for "Field"
        1: { cellWidth: columnWidths[1],fontSize: 14 ,textColor: [7, 8, 8]}, // Width for "Details"
      },
      margin: { top: 10 },
    });

    // Save the PDF
    doc.save("formData.pdf");
  };
  return (
    <div className="rddForm-container">
      <div className="page-layout">
        <h2>Requirement for Design UI of Project for Website / App Design / Software Development:</h2>
        <div className="table-container">
          <table>
            <tbody>
              <tr>
                <td>1. Business Nature:</td>
                <td>
                  <input
                    type="text"
                    name="businessNature"
                    value={formData.businessNature}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>2. Business Name:</td>
                <td>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>3. Categories list:</td>
                <td>
                  <textarea
                    name="categoriesList"
                    value={formData.categoriesList}
                    onChange={handleInputChange}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>4. Product samples:</td>
                <td>
                  <textarea
                    name="productSamples"
                    value={formData.productSamples}
                    onChange={handleInputChange}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>5. Video if any:</td>
                <td>
                  <input
                    type="text"
                    name="video"
                    value={formData.video}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>6. Logo if yes share, if no share idea:</td>
                <td>
                  <input
                    type="text"
                    name="logo"
                    value={formData.logo}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>7. Color specific if any:</td>
                <td>
                  <input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>8. Competitor Link:</td>
                <td>
                  <textarea
                    name="competitorLink"
                    value={formData.competitorLink}
                    onChange={handleInputChange}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>9. Font style suggestions if any:</td>
                <td>
                  <input
                    type="text"
                    name="fontStyle"
                    value={formData.fontStyle}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>10. Website format or any layout suggestion:</td>
                <td>
                  <input
                    type="text"
                    name="websiteFormat"
                    value={formData.websiteFormat}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>11. Business Description:</td>
                <td>
                  <textarea
                    name="businessDescription"
                    value={formData.businessDescription}
                    onChange={handleInputChange}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>12. USP if any:</td>
                <td>
                  <textarea
                    name="usp"
                    value={formData.usp}
                    onChange={handleInputChange}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>13. Any other suggestions:</td>
                <td>
                  <textarea
                    name="suggestions"
                    value={formData.suggestions}
                    onChange={handleInputChange}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>

          <button
            className="submit-button"
            onClick={() => {
             handleSave(); 
             // generatePDF(); 
              
            }}
          >
            Submit & Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default RddFormPage;
