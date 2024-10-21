import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const PdfGenerator = () => {
  const formRef = useRef();

  const generatePDF = () => {
    const pdf = new jsPDF();

    // Capture the form element and adjust styles for PDF
    html2canvas(formRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 0); // Adjust position and width

      pdf.save('styled-form.pdf');
    });

    // Adjust input field dimensions before generating the PDF
    document.querySelectorAll('input').forEach((input) => {
      input.style.width = '200px';  // Change width for PDF
      input.style.height = '40px';  // Change height for PDF
    });
  };

  return (
    <div>
      <div ref={formRef} style={{ padding: '20px', border: '1px solid #ccc' }}>
        <h2>Form for PDF Generation</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <button type="button" onClick={generatePDF}>Generate PDF</button>
      </div>
    </div>
  );
};

export default PdfGenerator;
