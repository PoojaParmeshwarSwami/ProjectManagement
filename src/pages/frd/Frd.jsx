import  "../frd/frd.css"
import { TbSquareRoundedArrowRightFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const Frd = () => {
  return (
    <>
      <div className="brd-container">
        <div style={{textAlign:'center',marginTop:'20px',color:'#334155'}}>
        <Link to="/frdList" className="frd-top-right-button"> FRD List </Link>
          <h3>
            Create FRD Document For Following Project : 
          </h3>
        </div>

        <div className="brd-text-container">
          <Link  to="/frdFormPage" style={{textDecorationLine:"none"}}>
            <div className="text-icon-container">
              <TbSquareRoundedArrowRightFilled
                style={{ height: "30px", width: "30px" }}
              />

              <p> Single vender E-commerce</p>
            </div>
          </Link>
          <Link style={{textDecorationLine:"none"}}>
            <div className="text-icon-container">
              <TbSquareRoundedArrowRightFilled   style={{ height: "30px", width: "30px" }} />

              <p> Single Vender E-commerce</p>
            </div>
          </Link>
          <Link style={{textDecorationLine:"none"}}>
            <div className="text-icon-container">
              <TbSquareRoundedArrowRightFilled    style={{ height: "30px", width: "30px" }}/>

              <p> Multi Vender E-commerce</p>
            </div>
          </Link>
          <Link style={{textDecorationLine:"none"}}>
            <div className="text-icon-container">
              <TbSquareRoundedArrowRightFilled   style={{ height: "30px", width: "30px" }}/>

              <p> Static Website</p>
            </div>
          </Link>
          <Link style={{textDecorationLine:"none"}}>
            <div className="text-icon-container">
              <TbSquareRoundedArrowRightFilled    style={{ height: "30px", width: "30px" }}/>

              <p> Dynamic Website</p>
            </div>
          </Link>
          <Link style={{textDecorationLine:"none"}}>
            <div className="text-icon-container">
              <TbSquareRoundedArrowRightFilled   style={{ height: "30px", width: "30px" }} />

              <p> SVE with Android App</p>
            </div>
          </Link>
          <Link style={{textDecorationLine:"none"}} >
            <div className="text-icon-container">
              <TbSquareRoundedArrowRightFilled   style={{ height: "30px", width: "30px" }}/>

              <p> SVE with Android / Ios App</p>
            </div>
          </Link>
          <Link style={{textDecorationLine:"none"}}>
            <div className="text-icon-container">
              <TbSquareRoundedArrowRightFilled   style={{ height: "30px", width: "30px" }} />

              <p> MVE with Android App</p>
            </div>
          </Link>
          <Link style={{textDecorationLine:"none"}}>
            <div className="text-icon-container">
              <TbSquareRoundedArrowRightFilled   style={{ height: "30px", width: "30px" }}  />

              <p> MVE with Android / Ios App</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Frd;
