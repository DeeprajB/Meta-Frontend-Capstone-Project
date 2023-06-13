import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';

export default function Routing() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element= {
            <Homepage />
            } />
        </Routes>
        </BrowserRouter>
    );
}