import Header from "../header/Header";
import "../dashBoardLayout/dashBoardLayout.css";
import Footer from "../footer/Footer";
import LeftSideBar from "../../component/leftSideBar/LeftSideBar";
import { Outlet } from "react-router-dom";
const DashBoardLayout = () => {
  return (
    <>
      <div id="app">
        <Header />
        <div style={{display:"flex",gap:"1%"}}>
        <LeftSideBar />
        <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default DashBoardLayout;
