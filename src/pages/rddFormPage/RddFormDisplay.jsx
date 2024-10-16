import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const RddFormDisplay = ({ formData }) => {
  const generatePDF = () => {
    const input = document.querySelector(".rddForm-display");
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
    <div className="rddForm-display" style={{ display: 'none' }}>
      <h2>Submitted Data:</h2>
      <ul>
        {Object.entries(formData).map(([key, value], index) => (
          <li key={index}>
            <strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong>
            <p>{value}</p>
          </li>
        ))}
      </ul>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default RddFormDisplay;
