import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";
import "../rddFormPage/rddFormPage.css";

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
      alert("Error saving data");
    }
  };

  
  const generatePDF = () => {
    const input = document.querySelector(".rddForm-container");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("form_data.pdf");
    });
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
              generatePDF(); 
              
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
