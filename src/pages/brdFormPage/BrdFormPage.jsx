import "../brdFormPage/brdFormPage.css";
const BrdFormPage = () => {
  return (
    <>
      <div className="brd-form-container">
        <form action="">
          <div className="info">
            <div className="customer-info-text">
              <h3>Customer Information : </h3>
            </div>
            <div className="label-input">
              <label htmlFor="">Full Name </label> <br />
              <input type="text" style={{ width: "82%" }} />
              <div style={{ display: "flex",gap:'2%' }}>
                <div>
                  <label htmlFor="">Mobile</label> <br />
                  <input type="number" style={{ width: "300px" }} />
                </div>
                <div >
                  <label htmlFor="">Email </label><br />
                  <input type="email" style={{ width: "305px" }} />
                </div>
              </div>
              <div style={{ display: "flex",gap:'2%' }}>
                <div>
                  <label htmlFor="">Amount</label> <br />
                  <input type="number" style={{ width: "300px" }} />
                </div>
                <div >
                  <label htmlFor="">TimeLine(In Days) </label><br />
                  <input type="email" style={{ width: "305px" }} />
                </div>
              </div>
              <button className="brd-submit-button">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default BrdFormPage;
