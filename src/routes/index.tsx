import { 
  BrowserRouter as Router,
  Route,
  Routes
 } from "react-router-dom";
import { FormComponent } from "../pages/Form"
import { Home } from "../pages/Home";

export const AppRoutes = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/forms" element={<FormComponent/>}/>
      </Routes>
    </Router>
  ) 
}