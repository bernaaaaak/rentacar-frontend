import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/NavBar";
import Home from "../pages/Home";



const AppRouter = () => {
   
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home/>
                    }
                />

            </Routes>
        </Router>
    );
};

export default AppRouter;
