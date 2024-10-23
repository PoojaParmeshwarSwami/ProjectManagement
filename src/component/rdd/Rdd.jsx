import "../rdd/rdd.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../component/userContext/UserContext";
import { useContext, useEffect } from "react";
import "jspdf-autotable";
import jsPDF from "jspdf";

const Rdd = () => {
  const { fetchData, data } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  const generatePDF = (item) => {
    const doc = new jsPDF();

    const imgData = "/src/assets/microdynamicLogo.png"; 
    const imgWidth = 50; 
    const imgHeight = 18; 
    doc.addImage(imgData, "JPEG", 62, 2, imgWidth, imgHeight);

    
    doc.setFontSize(28);
    doc.text("Requirement for Design UI of Project", 20, 25);
    doc.setFontSize(10);

    
    const tableData = [
      { field: "Business Nature: ", details: item.businessNature || "N/A" },
      { field: "Business Name: ", details: item.businessName || "N/A" },
      { field: "Categories List: ", details: item.categoriesList || "N/A" },
      { field: "Product samples: ", details: item.productSamples || "N/A" },
      { field: "Video if any: ", details: item.video || "N/A" },
      {
        field: "Logo if yes share, if no share idea: ",
        details: item.logo || "N/A",
      },
      { field: "Color specific if any: ", details: item.color || "N/A" },
      { field: "Competitor Link: ", details: item.competitorLink || "N/A" },
      {
        field: " Font style suggestions if any: ",
        details: item.fontStyle || "N/A",
      },
      {
        field: "Website format or any layout suggestion: ",
        details: item.websiteFormat || "N/A",
      },
      {
        field: "Business Description: ",
        details: item.businessDescription || "N/A",
      },
      { field: "USP if any: ", details: item.usp || "N/A" },
      {
        field: "Any other suggestions: ",
        details: item.suggestions || "N/A",
      },
     
    ];

    
    const columnWidths = [52.83, 120.75]; 

    
    doc.autoTable({
      head: [["Field", "Details"]],
      body: tableData.map((item) => [item.field, item.details]),
      startY: 30, 
      styles: { cellWidth: "fixed" }, 
      columnStyles: {
        0: {
          cellWidth: columnWidths[0],
          fontSize: 14,
          fontStyle: "bold",
          fontFamily: "Arial",
          textColor: [0, 0, 0],
        }, 
        1: { cellWidth: columnWidths[1], fontSize: 14, textColor: [7, 8, 8] }, // Width for "Details"
      },
      margin: { top: 10 },
    });

    
    doc.save("formData.pdf");
  };
  return (
    <>
      <div className="rdd-container">
        <Link to="/rddFormPage">
          <button className="top-right-button"> + </button>
        </Link>
        <table>
          <thead>
            <tr>
              <th>SR.No</th>
              <th>Business Name</th>
              <th>Business Nature</th>
              <th>ADD By</th>
              <th>Date</th>
              <th>Edit</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, ind) => (
              <tr key={ind}>
                <td data-label="SR.No">{ind + 1}</td>
                <td data-label="Business Name">{item.businessName}</td>
                <td data-label="Business Nature">{item.businessNature}</td>
                <td data-label="ADD By"></td>
                <td data-label="Date">{item.createddate}</td>
                <td data-label="Edit"><Link>Edit</Link></td>
                <td data-label="Download"><button onClick={(()=>{generatePDF(item)})}>Download</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Rdd;
