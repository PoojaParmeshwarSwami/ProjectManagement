import jsPDF from 'jspdf';
import 'jspdf-autotable';  // Importing jsPDF AutoTable plugin

const generatePDFWithTable = () => {
  const doc = new jsPDF();

  // Define columns and data for the table
  const columns = ["ID", "Name", "Country"];
  const data = [
    [1, "John Doe", "USA"],
    [2, "Anna Smith", "Germany"],
    [3, "Peter Johnson", "Canada"]
  ];

  // Add table to the PDF
  doc.autoTable(columns, data);

  doc.save("table.pdf");
};

export default generatePDFWithTable;