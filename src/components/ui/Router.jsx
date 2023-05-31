import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../screens/home/home";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<div>Че там адастын ба ? </div>} />
            </Routes>
        </BrowserRouter>
    );

}

export default Router