import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoardLayout from "./component/dashBoardLayout/DashBoardLayout";
import Rdd from "./component/rdd/Rdd";
import DashBoard from "./component/dashBoard/DashBoard";

function App() {
  return (
    <>
<Router>
    <Routes>
        <Route path="/" element={<DashBoardLayout/>}>
        
        <Route index element={<DashBoard/>}/>
        <Route path="/rdd" element={<Rdd/>}/>

        </Route>
    </Routes>
</Router>
    </>
  );
}

export default App;
