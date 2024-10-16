const Nda = () => {
  return (
    <>
      <div className="brd-form-container">
        <form action="">
          <div className="info">
            <div className="customer-info-text">
              <h3>Client Information : </h3>
            </div>
            <div className="label-input">
              <label htmlFor="">Client Name </label> <br />
              <input type="text" style={{ width: "82%" }} />
              <div style={{ display: "flex", gap: "2%" }}>
                <div>
                  <label htmlFor="">Company Name </label> <br />
                  <input type="number" style={{ width: "300px" }} />
                </div>
                <div>
                  <label htmlFor="">Address</label>
                  <br />
                  <input type="email" style={{ width: "305px" }} />
                </div>
              </div>
              <div style={{ display: "flex", gap: "2%" }}>
                <div>
                  <label htmlFor="">Amount</label> <br />
                  <input type="number" style={{ width: "300px" }} />
                </div>
                <div>
                  <label htmlFor="">TimeLine(In Days) </label>
                  <br />
                  <input type="email" style={{ width: "305px" }} />
                </div>
              </div>
              <div>
                <label htmlFor="">Date </label>
                <br />
                <input type="date" style={{ width: "305px" }} />
              </div>
              <button className="brd-submit-button">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Nda;
