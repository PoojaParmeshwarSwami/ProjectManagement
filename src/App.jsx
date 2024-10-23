import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoardLayout from "./component/dashBoardLayout/DashBoardLayout";
import Rdd from "./component/rdd/Rdd";
import DashBoard from "./component/dashBoard/DashBoard";
import RddFormPage from "./pages/rddFormPage/RddFormPage";
import Brd from "./pages/brd/Brd";
import BrdFormPage from "./pages/brdFormPage/BrdFormPage";
import ListOfBrd from "./pages/listOfBrd/ListOfBrd";
import CRForm from "./pages/cRForm/CRForm";
import Cr from "./pages/cr/Cr";
import Nda from "./pages/nda/Nda";
import Frd from "./pages/frd/Frd";
import FrdList from "./pages/frdList/FrdList";
import { UserProvider } from "./component/userContext/UserContext";
import FrdFormPage from "./pages/frdFormPage/FrdFormPage";
import RddEditData from "./pages/rddEditData/RddEditData";

function App() {
  return (
    <>
<UserProvider>
<Router>
    <Routes>
        <Route path="/" element={<DashBoardLayout/>}>
        
        <Route index element={<DashBoard/>}/>
        <Route path="/rdd" element={<Rdd/>}/>
        <Route path="/rddFormPage" element={<RddFormPage/>}/>
        <Route path="/rddEditData/:id" element={<RddEditData/>}/>
        <Route path="brd" element={<Brd/>}/>
        <Route path="/brdFormPage" element={<BrdFormPage/>}/>
        <Route path="/frdFormPage" element={<FrdFormPage/>}/>
        <Route path="/brdList" element= {<ListOfBrd/>}/>
        <Route path="/crForm" element ={<CRForm/>}/>
        <Route path="/cr" element ={<Cr/>}/>
        <Route path="/nda" element ={<Nda/>}/>
        <Route path="/frd" element ={<Frd/>}/>
        <Route path="/frdList" element ={<FrdList/>}/>

        </Route>
    </Routes>
</Router>
</UserProvider>
    </>
  );
}

export default App;
