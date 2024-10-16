import React, { useState } from "react";
import RddForm from "./RddForm"; // Adjust the path according to your file structure
import RddFormDisplay from "./RddFormDisplay"; // Adjust the path according to your file structure
import "./rddFormPage.css"; // Adjust the path according to your file structure

const RddFormPage = () => {
  const [formData, setFormData] = useState(null);

  const handleSave = (data) => {
    setFormData(data); // Save the form data
  };

  return (
    <div className="page-layout">
      <RddForm onSave={handleSave} />
      {formData && <RddFormDisplay formData={formData} />}
    </div>
  );
};

export default RddFormPage;
