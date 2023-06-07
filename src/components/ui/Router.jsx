import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../screens/home/home";
import CarDetail from "../screens/car-detail/CarDetail";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/car/:id" element={<CarDetail />} />
                <Route path="*" element={<div>Че там адастын ба ? </div>} />
            </Routes>
        </BrowserRouter>
    );

}

export default Router